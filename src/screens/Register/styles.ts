import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const Container = styled.ImageBackground`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(10)}px ${RFValue(20)}px;
    justify-content: center;
`  

export const Content = styled.View`
    padding: ${RFValue(20)}px ${RFValue(10)}px;
    width: 90%;
    height: ${RFValue(250)}px;
    align-self: center;
    background-color: ${({theme}) => theme.COLORS.WHITE_SECONDARY};
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: ${RFValue(5)}px;
`;

export const ContentInput = styled.View`
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;
    align-items: center;
    position: relative;
`;

export const ButtonVisiblePassword = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
})`
    background-color: ${({theme}) => theme.COLORS.WHITE_600};
    height: ${RFValue(40)}px;
    width: ${RFValue(40)}px;
    padding: ${RFValue(5)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
`;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    background-color: ${({theme}) => theme.COLORS.ORANGE_700};
    width: 100%;
    height: ${RFValue(40)}px;
    padding: ${RFValue(5)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(5)}px;
`;

export const TextButton = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE_SECONDARY};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
    text-transform: uppercase;
`;

export const ViewRegister = styled.View`
    padding-top: ${RFValue(10)}px;
`

export const ButtonRegister = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    margin-top: ${RFValue(10)}px;
`;

export const TitleRegister = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    color: ${({theme}) => theme.COLORS.TEXT};
`;

export const IconBack = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    align-items: center;
    justify-content: center;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(20)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    position: absolute;
    top: ${RFValue(40)}px;
    left: ${RFValue(20)}px;
    z-index: 100;
`;