import express from 'express'

import { routes } from './routes'

// Configuration server
const app = express()

app.use(express.json())
app.use(routes)

// Start server
app.listen(3333, () => console.log('Server started'))