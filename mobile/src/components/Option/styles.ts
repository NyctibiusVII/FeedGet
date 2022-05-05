import { StyleSheet } from 'react-native'
import { theme }      from '../../theme'

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 112,
        backgroundColor: theme.colors.surface_secondary,
        padding: 8,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    image: {
        width: 40,
        height: 40
    },
    title: {
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
        fontSize: 14,
        marginTop: 8
    }
})