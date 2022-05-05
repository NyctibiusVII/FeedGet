import { StyleSheet } from 'react-native'
import { theme }      from '../../theme'

export const styles = StyleSheet.create({
    container: { alignItems: 'center' },
    image:{
        width: 36,
        height: 36,
        marginTop: 42,
        marginBottom: 10
    },
    title: {
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
        fontSize: 20,
        marginBottom: 24
    },
    button:{
        height: 40,
        backgroundColor: theme.colors.surface_secondary,
        paddingHorizontal: 24,
        marginBottom: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    buttonTitle:{
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
        fontSize: 14
    }
})