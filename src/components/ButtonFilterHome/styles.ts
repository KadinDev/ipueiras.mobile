import styled, {css} from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'

export type ButtonActive = {
    selected: boolean
}

export const Container = styled.TouchableOpacity<ButtonActive>`
    min-width: ${RFValue(100)}px;
    height: ${RFValue(30)}px;
    border-radius: ${RFValue(30)}px;
    align-items: center;
    justify-content: center;
    padding-left: ${RFValue(5)}px;
    padding-right: ${RFValue(5)}px;
    margin-top: ${RFValue(10)}px;
    margin-right: ${RFValue(10)}px;

    ${({ theme, selected} ) => css `
        background-color: ${selected ? theme.COLORS.ORANGE_500 : theme.COLORS.WHITE_600}
    `}
`

export const Title = styled.Text<ButtonActive>`
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};

    ${({ theme, selected} ) => css `
        color: ${selected ? theme.COLORS.WHITE_600 : theme.COLORS.TEXT}
    `}
`