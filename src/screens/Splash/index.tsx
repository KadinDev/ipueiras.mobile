import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { 
    Container,
    ViewLoad,
    Title
} from './styles'

import ipueiras from '@assets/ipueiras.jpg'

import theme from '../../theme'

export function Splash(){
    return (
        <Container
            source={ipueiras}
        >   
            <StatusBar style='dark' translucent backgroundColor='transparent' />

            <ViewLoad>
                <ActivityIndicator size={RFValue(60)} color={theme.COLORS.TEXT} />
                <Title>carregando</Title>
            </ViewLoad>

        </Container>
    )
}