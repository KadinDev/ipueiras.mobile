import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    
`  

export const Text = styled.Text`
    color: black;
    font-size: 18px;
`;