import nodemailer from 'nodemailer'

const account = await nodemailer.createTestAccount()

/* Para qual servidor de email irá enviar o email */
export const mail = nodemailer.createTransport({
  host: account.smtp.host,
  port: account.smtp.port,
  secure: account.smtp.secure, // true for 465, false for other ports
  debug: true,
  auth: {
    user: account.user, // generated ethereal user
    pass: account.pass, // generated ethereal password
  },
})
