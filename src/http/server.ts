import { Elysia } from 'elysia'

import { RegisterRestaurant } from './routes/register-restaurant'
import { sendAuthLink } from './routes/send-auth-link'
import { authenticateFromLink } from './routes/authenticate-from-link'

const app = new Elysia()
  .use(RegisterRestaurant)
  .use(sendAuthLink)
  .use(authenticateFromLink)

app.listen(3333, () =>
  console.log('🚀 HTTP server running: http://localhost:3333'),
)
