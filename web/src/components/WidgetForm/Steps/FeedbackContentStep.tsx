import { FormEvent, useState } from 'react'

import { Loading }          from '../../Loading'
import { CloseButton }      from '../../CloseButton'
import { ScreenshotButton } from '../ScreenshotButton'

import { feedbackTypes, FeedbackType } from '..'

import { ArrowLeft } from 'phosphor-react'

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [screenshot, setScreenshot]     = useState<string | null>(null)
    const [comment, setComment]           = useState('')

    const handleSubmitFeedback = (e: FormEvent) => {
        setIsSubmitting(true)

        e.preventDefault()

        setTimeout(() => {
            onFeedbackSent()
            setIsSubmitting(false)
        }, 500)
    }

    return (
        <>
            <header>
                <button
                    type='button'
                    title='Voltar'
                    aria-label='Voltar'
                    onClick={onFeedbackRestartRequested}
                    className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
                ><ArrowLeft weight='bold' className='w-4 h-4' /></button>

                <span className='text-xl leading-6 flex items-center gap-2'>
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
                <textarea
                    onChange={e => setComment(e.target.value)}
                    placeholder='Conte com detalhes o que está acontecendo...'
                    className='md:min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
                />

                <footer className='flex gap-2 mt-2'>
                    <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />

                    <button
                        type='submit'
                        title='Enviar feedback'
                        aria-labelledby='Enviar feedback'
                        disabled={comment.length === 0}
                        className='p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:hover:bg-brand-500'
                    >{ isSubmitting ? <Loading /> : 'Enviar feedback' }</button>
                </footer>
            </form>
        </>
    )
}