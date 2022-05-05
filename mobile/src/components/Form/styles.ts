import { StyleSheet } from 'react-native'
import { theme }      from '../../theme'

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    header: {
        marginVertical: 16,
        flexDirection: 'row'
    },
    titleContainer: {
        paddingRight: 24,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    titleText: {
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
        fontSize: 20
    },
    input: {
        width: '100%',
        height: 112,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.regular,
        padding: 12,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: theme.colors.stroke,
        borderRadius: 4
    },
    footer: {
        marginBottom: 16,
        flexDirection: 'row'
    }
})