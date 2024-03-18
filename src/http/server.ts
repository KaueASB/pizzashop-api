import { Elysia } from 'elysia'

import swagger from '@elysiajs/swagger'

import { RegisterRestaurant } from './routes/register-restaurant'
import { sendAuthLink } from './routes/send-auth-link'
import { authenticateFromLink } from './routes/authenticate-from-link'
import { getProfile } from './routes/get-profile'
import { getManagedRestaurant } from './routes/get-managed-restaurant'
import { getOrderDetails } from './routes/get-order-details'

const app = new Elysia()
  .use(swagger())
  .use(RegisterRestaurant)
  .use(sendAuthLink)
  .use(authenticateFromLink)
  .use(getProfile)
  .use(getManagedRestaurant)
  .use(getOrderDetails)
  .onError(({ error, code, set }) => {
    switch (code) {
      case 'VALIDATION': {
        set.status = error.status

        return error.toResponse()
      }
      default: {
        console.error(error)

        return new Response(null, { status: 500 })
      }
    }
  })

app.listen(3333, () =>
  console.log('🚀 HTTP server running: http://localhost:3333'),
)
