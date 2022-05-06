import express from 'express'
import cors    from 'cors'

import { routes } from './routes'

import 'dotenv/config'

// Configuration server
const app = express()

const CORS_ORIGIN = process.env.DEPLOY_URL

app.use(cors())
app.use(express.json())
app.use(routes)

// Start server
app.listen(process.env.PORT || 3333, () => console.log('Server started'))