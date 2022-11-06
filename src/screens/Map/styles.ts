import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    flex: 1;
    background-color: transparent;
`  

export const ContainerHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    margin: ${getStatusBarHeight() + RFValue(40)}px ${RFValue(20)}px 0 ${RFValue(20)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(25)}px;
    padding: 0 ${RFValue(10)}px 0 ${RFValue(10)}px;
    z-index: 100;
`  
export const Search = styled.TouchableOpacity.attrs({
    activiteOpacity: 0.8
})`
    align-items: center;
    justify-content: center;
`;

export const MyLocation = styled.TouchableOpacity.attrs({
    activiteOpacity: 0.4
})`
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: ${RFValue(100)}px;
    right: ${RFValue(20)}px;
    background-color: ${({theme}) => theme.COLORS.WHITE_600};
    padding: ${RFValue(5)}px;
    border-radius: ${RFValue(50)}px;
`;