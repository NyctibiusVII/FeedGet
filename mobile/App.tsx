import React from 'react'
import 'react-native-gesture-handler'

import AppLoading from 'expo-app-loading'
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium
} from '@expo-google-fonts/inter'

import { View }      from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Widget from './src/components/Widget'

import { theme } from './src/theme'

export default function App() {
    const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium })

    if (!fontsLoaded) return <AppLoading />

    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.colors.background,
        }}>
            <StatusBar
                style='light'
                backgroundColor={theme.colors.transparent}
                translucent
            />

            <Widget />
        </View>
    )
}