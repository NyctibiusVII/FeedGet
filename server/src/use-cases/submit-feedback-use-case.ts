import { MailAdapter }         from '../adapters/mail-adapter'
import { FeedbacksRepository } from '../repositories/feedbacks-repository'

interface SubmitFeedbackUseCaseRequest {
    type:        string
    comment:     string
    screenshot?: string
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter:         MailAdapter
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request

        if (!type || !comment)
            throw new Error('Type or Comment is missing')

        if (screenshot && !screenshot.startsWith('data:image/png;base64,'))
            throw new Error('Invalid screenshot format')

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback!',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #272727;">`,
                    `<h1>Feedback</h1>`,
                    `<p>Tipo: ${type}</p>`,
                    `<p>Comentário: ${comment}</p>`,
                    screenshot && (`<p>Screenshot: </p>` && `<img src="${screenshot}" alt="Imagem do print da tela" />`),
                `</div>`,
            ].join('\n')
        })
    }
}