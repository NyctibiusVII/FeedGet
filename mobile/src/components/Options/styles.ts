import { StyleSheet } from 'react-native'
import { theme }      from '../../theme'

export const styles = StyleSheet.create({
    container: { alignItems: 'center' },
    title: {
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
        fontSize: 20,
        marginBottom: 32
    },
    options: {
        width: '100%',
        marginBottom: 48,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})