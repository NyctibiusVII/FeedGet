import express from 'express'

import { NodemailerMailAdapter }     from './adapters/nodemailer/nodemailer-mail-adapter'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'
import { SubmitFeedbackUseCase }     from './use-cases/submit-feedback-use-case'

// Configuration server
export const routes = express.Router()

// Routes
routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter     = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({ type, comment, screenshot })

    return res.status(201).send()
})
routes.get('/feedbacks', (req, res) => {
    return res.status(200).json({
        message: 'Connected to the server',
        status: 'OK'
    })
})