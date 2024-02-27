import { Elysia, t } from 'elysia'
import nodemailer from 'nodemailer'
import { db } from '../../db/connection'
import { createId } from '@paralleldrive/cuid2'
import { authLinks } from '../../db/schema'
import { env } from '../../env'
import { UnauthorizedError } from '../errors/unauthorized-error'
import { mail } from '../../lib/nodemailer'

export const sendAuthLink = new Elysia().post(
  'authenticate',
  async ({ body }) => {
    const { email } = body

    const userFromEmail = await db.query.users.findFirst({
      where(fields, { eq }) {
        return eq(fields.email, email)
      },
    })

    if (!userFromEmail) {
      throw new UnauthorizedError()
    }

    const authLinkCode = createId()

    await db.insert(authLinks).values({
      userId: userFromEmail.id,
      code: authLinkCode,
    })

    // Enviar e-mail: Resend(necessário ter um domínio), Mailtrap e Nodemailer

    const authLink = new URL('/auth-links/authenticate', env.API_BASE_URL)

    authLink.searchParams.set('code', authLinkCode)
    authLink.searchParams.set('redirect', env.AUTH_REDIRECT_URL)

    const infoEmail = await mail.sendMail({
      from: {
        name: 'Pizza Shop',
        address: 'pizzashop@pizzashop.com',
      },
      to: email,
      subject: 'Pizza Shop - Autenticação',
      text: `Use o link a seguir para autenticar no Pizza Shop:${authLink.toString()}`,
    })

    console.log(nodemailer.getTestMessageUrl(infoEmail))
  },
  {
    body: t.Object({
      email: t.String(),
    }),
  },
)
