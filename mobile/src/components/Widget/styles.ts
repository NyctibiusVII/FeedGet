import { StyleSheet }     from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { theme }          from '../../theme'

export const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.brand,
        shadowColor: '#000',
        position: 'absolute',
        right: 16,
        bottom: getBottomSpace() + 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24
    },
    modal: {
        backgroundColor: theme.colors.surface_primary,
        paddingBottom: getBottomSpace() + 16
    },
    indicator: {
        width: 56,
        backgroundColor: theme.colors.text_primary
    }
})