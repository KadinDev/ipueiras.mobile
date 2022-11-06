import styled, {css} from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export type TypeProps = 'search' | 'login' | 'register';

type Props = {
    size: TypeProps;
    isFocused: boolean;
};

export const Container = styled(TextInput).attrs<Props>(({theme}) => ({
    placeholderTextColor: theme.COLORS.PLACEHOLDER,
}))<Props>`
    background-color: ${({theme}) => theme.COLORS.WHITE_600};
    border-radius: ${RFValue(10)}px;
    padding-left: ${RFValue(4)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_400};
    font-size: ${RFValue(16)}px;

    ${({size}) => size === 'search' && css`
        flex: 1;
        height: ${RFValue(30)}px;
        margin-right: ${RFValue(5)}px;
        margin-left: ${RFValue(5)}px;
    ` };

    ${({size}) => size === 'login' && css`
        flex: 1;
        padding-right: ${RFValue(60)}px;
        padding-left: ${RFValue(10)}px;
        height: ${RFValue(40)}px;
    `};

    ${({size}) => size === 'register' && css`
        width: 100%;
        padding-left: ${RFValue(10)}px;
        height: ${RFValue(40)}px;
        border-radius: ${RFValue(4)}px
    `};

    ${({ isFocused }) => isFocused && css`
        border-bottom-width: 1px;
        border-bottom-color: ${({theme}) => theme.COLORS.ORANGE_500};
    `};
`;