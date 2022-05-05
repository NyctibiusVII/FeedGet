import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from '../mail-adapter'

import 'dotenv/config'

const transport = nodemailer.createTransport({
    host: process.env.TRANSPORT_HOST,
    port: Number(process.env.TRANSPORT_PORT || 2525),
    auth: {
        user: process.env.TRANSPORT_AUTH_USER,
        pass: process.env.TRANSPORT_AUTH_PASS
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData): Promise<void> {
        await transport.sendMail({
            from: 'Equipe FeedGet <oi@feedget.com>',
            to: 'Matheus Vidigal <matheus.dev.07@gmail.com>',
            subject,
            html: body
        })
    }
}