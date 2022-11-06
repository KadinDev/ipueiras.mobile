import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

type TitleProps = {
    color: string;
};

export type ActiveButtonTabProps = {
    selected: boolean;
}

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: ${RFValue(45)}px;
    height: 100%;
`;

export const Title = styled.Text<TitleProps>`
    font-size: ${RFValue(12)}px;
    text-transform: uppercase;
    transform: rotate(-90deg);
    margin-right: ${RFValue(-3)}px;

    ${({theme, color }) => css `
        font-family: ${theme.FONTS.ROBOTO_700};
        color: ${color};
    `}
`;

export const ViewBorder = styled.View`
    position: absolute;
    top: ${RFValue(2)}px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Border = styled.View`
    height: ${RFValue(8)}px;
    width: ${RFValue(8)}px;
    border-radius: ${RFValue(4)}px;
    background-color: ${({theme}) => theme.COLORS.ORANGE_500};
    
`;