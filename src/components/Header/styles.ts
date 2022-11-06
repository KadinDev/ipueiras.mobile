import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const ContainerHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.TEXT};
    margin: ${getStatusBarHeight() + RFValue(40)}px ${RFValue(20)}px 0 ${RFValue(20)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(25)}px;
    padding: 0 ${RFValue(5)}px 0 ${RFValue(5)}px;
`  
export const Search = styled.TouchableOpacity.attrs({
    activiteOpacity: 0.8
})`
    align-items: center;
    justify-content: center;
`;