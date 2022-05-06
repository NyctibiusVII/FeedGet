import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native'

import * as FileSystem   from 'expo-file-system'
import { captureScreen } from 'react-native-view-shot'
import { ArrowLeft }     from 'phosphor-react-native'
import api               from '../../libs/api'

import { ScreenshotButton } from '../../components/ScreenshotButton'
import { FeedbackType }     from '../../components/Widget'
import { Button }           from '../../components/Button'

import { feedbackTypes } from '../../utils/feedbackTypes'
import { styles }        from './styles'
import { theme }         from '../../theme'

interface Props {
    feedbackType:       FeedbackType
    onFeedbackCanceled: () => void
    onFeedbackSent:     () => void
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)
    const [screenshot, setScreenshot]               = useState<string | null>(null)
    const [comment, setComment]                     = useState('')

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    const handleScreenshot = () => {
        captureScreen({ format: 'png', quality: 0.7 })
        .then(uri => setScreenshot(uri))
        .catch(err => console.error(err))
    }
    const handleScreenshotRemove = () => setScreenshot(null)
    const handleSendFeedback = async () => {
        if (isSendingFeedback) return

        setIsSendingFeedback(true)

        const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' })

        try {
            await api.post('/feedbacks', {
                type: feedbackType,
                screenshot: `data:image/png;base64,${screenshotBase64}`,
                comment
            })

            onFeedbackSent()
        } catch (err) { console.error(err); setIsSendingFeedback(false) }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onFeedbackCanceled}>
                    <ArrowLeft
                        color={theme.colors.text_secondary}
                        size={24}
                        weight='bold'
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image style={styles.image} source={feedbackTypeInfo.image} />
                    <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
                </View>
            </View>

            <TextInput
                style={styles.input}
                placeholder={'Conte com detalhes o que está acontecendo...'}
                placeholderTextColor={theme.colors.text_secondary}
                onChangeText={setComment}
                autoCorrect={false}
                multiline
            />

            <View style={styles.footer}>
                <ScreenshotButton
                    screenshot={screenshot}
                    onTakeShot={handleScreenshot}
                    onRemoveShot={handleScreenshotRemove}
                />

                <Button onPress={handleSendFeedback} isLoading={isSendingFeedback} />
            </View>
        </View>
    )
}