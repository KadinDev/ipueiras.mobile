import styled, {css} from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export interface ActiveCategory {
    active: boolean
}

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    width: ${RFValue(80)}%;
    height: ${RFValue(60)}%;
    background-color: ${({theme}) => theme.COLORS.WHITE_SECONDARY};
    border-radius: ${RFValue(5)}px;
`;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})``;

export const Button = styled.TouchableOpacity`
    margin: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(5)}px;
    height: ${RFValue(40)}px;
    border: dashed 1px ${({theme}) => theme.COLORS.ORANGE_500};
    
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family:  ${({theme}) => theme.FONTS.ROBOTO_500};
    color:  ${({theme}) => theme.COLORS.ORANGE_700};
`;

