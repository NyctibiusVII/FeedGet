import React from 'react'
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native'

import { Trash, Camera } from 'phosphor-react-native'

import { styles } from './styles'
import { theme }  from '../../theme'

interface Props {
    screenshot:   string | null
    onTakeShot:   () => void
    onRemoveShot: () => void
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={screenshot ? onRemoveShot : onTakeShot}>
            { screenshot ?
                <View>
                    <Image style={styles.image} source={{ uri: screenshot }} />

                    <Trash
                        style={styles.removeIcon}
                        color={theme.colors.text_secondary}
                        size={22}
                        weight='fill'
                    />
                </View>
                :
                <Camera
                    color={theme.colors.text_secondary}
                    size={24}
                    weight='bold'
                />
            }
        </TouchableOpacity>
    )
}