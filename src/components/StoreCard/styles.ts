import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    flex: 1;

    margin-top: ${RFValue(20)}px;
    margin-left: ${RFValue(10)}px;
    height: ${RFValue(200)}px;
    background-color: ${({theme}) => theme.COLORS.WHITE_600};
    border-radius: ${RFValue(20)}px;
`  

export const ImageStore = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 100%;
    flex: 1;
    border-top-left-radius: ${RFValue(20)}px;
    border-top-right-radius: ${RFValue(20)}px;
`;

export const Content = styled.View`
    width: 100%;
    padding-right: ${RFValue(10)}px;
    padding-left: ${RFValue(10)}px;
    padding-bottom: ${RFValue(10)}px;
    background-color: ${({theme}) => theme.COLORS.WHITE_600};
    border-bottom-left-radius: ${RFValue(20)}px;
    border-bottom-right-radius: ${RFValue(20)}px;
    align-items: center;
    border-top-width: ${RFValue(2)}px;
    border-top-color: ${({theme}) => theme.COLORS.ORANGE_500};
`;

export const Title = styled.Text`
    font-size: ${RFValue(13)}px;
    line-height: ${RFValue(16)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    margin-top: ${RFValue(5)}px;
`;
