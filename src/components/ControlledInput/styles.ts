import styled, {css} from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

export const IconError = styled(MaterialIcons)`
    position: absolute;
    right: 0;
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.COLORS.RED};
`;

export const Error = styled.Text`
    color: ${({theme}) => theme.COLORS.RED};
    font-size: ${RFValue(14)}px;
    position: absolute;
    right: 0;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    background-color: ${({theme}) => theme.COLORS.WHITE_600};
`;
