import express from 'express'
import { prisma } from './prisma'

// Configuration server
const app = express()

app.use(express.json())

// Routes
app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    return res.status(201).json({ data: feedback })
})

// Start server
app.listen(3333, () => console.log('Server started'))