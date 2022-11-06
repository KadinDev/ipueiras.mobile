import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(ImageBackground).attrs({
    resizeMode: 'stretch'
})`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
`;

export const ViewLoad = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    color: ${({theme}) => theme.COLORS.TEXT};
    text-transform: uppercase;
    letter-spacing: ${RFValue(5)}px;
`;