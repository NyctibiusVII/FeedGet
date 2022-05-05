import { StyleSheet } from 'react-native'
import { theme }      from '../../theme'

export const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        backgroundColor: theme.colors.surface_secondary,
        marginRight: 8,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    image: {
        width: 40,
        height: 40
    },
    removeIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0
    }
})