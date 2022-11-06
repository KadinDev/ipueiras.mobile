import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'

import { Routes } from './src/routes'
import { AuthProvider } from '@hooks/auth'

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <ActivityIndicator size={40} color={theme.COLORS.PRIMARY} />
      </View>
    )
  }

  return (
    <ThemeProvider theme={theme} >
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      <AuthProvider>
        <Routes/>
      </AuthProvider>

    </ThemeProvider>
  );
}

