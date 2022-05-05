import { StyleSheet } from 'react-native'
import { theme }      from '../../theme'

export const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: theme.colors.brand,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    title: {
        color: theme.colors.text_on_brand_color,
        fontSize: 14,
        fontFamily: theme.fonts.medium
    }
})