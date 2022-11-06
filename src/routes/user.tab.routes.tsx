import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { Home } from '@screens/Home'
import { Map } from '@screens/Map'
import { Favorites } from '@screens/Favorites'

import { BottomMenu } from '@components/BottomMenu'

const { Navigator, Screen } = createBottomTabNavigator()


export function UserTabRoutes() {
    const {COLORS, FONTS} = useTheme()

    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarHideOnKeyboard: true, // tabBar fica atras do teclado ao abrir
                tabBarActiveTintColor: COLORS.ORANGE_700,
                tabBarInactiveTintColor: COLORS.PRIMARY,
                tabBarLabelPosition: 'beside-icon',
                headerShown: false,
                tabBarShowLabel: false, // nome da rota abaixo do icone

                tabBarStyle: {
                    height: RFValue(60),
                    paddingVertical: Platform.OS === 'ios' ? RFValue(20) : 0,
                    borderTopColor: 'transparent',
                    alignSelf: 'center',
                    width: '90%',
                    marginLeft: '5%',
                    marginRight: '5%',
                    borderRadius: RFValue(50),
                    position: 'absolute',
                    backgroundColor: COLORS.BACKGROUND,
                    marginBottom: getBottomSpace() + RFValue(20)
                }
            }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({size, color, focused}) => (
                        <BottomMenu 
                            title='Home' 
                            color={color}
                            selected={focused}
                        >
                            <MaterialIcons
                            name='home'
                            size={RFValue(30)}
                            color={color}
                            />
                        </BottomMenu> 
                    )
                }}
            />

            <Screen
                name='Mapa'
                component={Map}
                options={{
                    tabBarIcon: ({size, color, focused}) => (
                        <BottomMenu 
                            title='Mapa' 
                            color={color}
                            selected={focused}
                        >
                            <MaterialIcons
                            name='location-on'
                            size={RFValue(30)}
                            color={color}
                            />
                        </BottomMenu> 
                    )
                }}
            />

            <Screen
                name='My'
                component={Favorites}
                options={{
                    tabBarIcon: ({size, color, focused}) => (
                        <BottomMenu 
                            title='My' 
                            color={color}
                            selected={focused}
                        >
                            <MaterialIcons
                            name='favorite'
                            size={RFValue(30)}
                            color={color}
                            />
                        </BottomMenu> 
                    )
                }}
            />
        </Navigator>
    )
}