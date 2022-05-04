import express from 'express'
import nodemailer from 'nodemailer'

import { prisma } from './prisma'

// Configuration server
const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "8f066be777a002",
        pass: "3b08a7bf7b97ff"
    }
})

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

    await transport.sendMail({
        from: 'Equipe FeedGet <oi@feedget.com>',
        to: 'Matheus Vidigal <matheus.dev.07@gmail.com>',
        subject: `Novo feedback de ${type}`,
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #272727;">`,
                `<h1>Feedback</h1>`,
                `<p>Tipo: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot && `<p>Screenshot: ${screenshot}</p>`,
            `</div>`,
        ].join('\n')
    })

    return res.status(201).json({ data: feedback })
})

// Start server
app.listen(3333, () => console.log('Server started'))