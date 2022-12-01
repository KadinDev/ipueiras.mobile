import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE_SECONDARY};
`

export const ScrollContainer = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: RFValue(100)
    }
})`
`;

export const Header = styled.View`
    margin-bottom: ${RFValue(10)}px;
    position: relative;
`;

export const ActionsHeader = styled.View`
    position: absolute;
    width: 100%;
    margin-left: ${RFValue(20)}px;
    padding: ${getStatusBarHeight() + RFValue(20)}px ${RFValue(20)}px 0 ${RFValue(20)}px;
    align-self: center;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
`;

export const ButtonHeader = styled.TouchableOpacity.attrs({
    activeOpactity: 0.4
})`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(50)}px;
`;

export const ImageStore = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: ${RFValue(350)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const ContentStore = styled.View`
    padding: ${RFValue(20)}px;
    background-color:  ${({theme}) => theme.COLORS.WHITE_600};
    margin-top: ${RFValue(-40)}px;
    border-radius: ${RFValue(30)}px;
`;

export const HeaderContentStore = styled.View`
`;

export const CategoryStore = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(10)}px;
    line-height: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
    text-transform: uppercase;
`;

export const TitleStore = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
    margin-top: ${RFValue(-5)}px;
    padding-bottom: ${RFValue(5)}px;
`;

export const ViewAddress = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: ${RFValue(20)}px;
`;

export const AddressStore = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(17)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    background-color: ${({theme}) => theme.COLORS.WHITE_600};
    border-radius: ${RFValue(10)}px;
    padding: ${RFValue(5)}px;
`;

export const HeaderContentDescription = styled.View`
    margin-top: ${RFValue(15)}px;
`;

export const DescriptionStore = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    text-align: center;
    margin-bottom: ${RFValue(10)}px;
    padding: ${RFValue(10)}px;
    background-color: ${({theme}) => theme.COLORS.WHITE_SECONDARY};

`;

export const ContentContact = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const Social = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ImageSocial = styled.Image`
    width: ${RFValue(20)}px;
    height: ${RFValue(20)}px;
`;

export const ContactStore = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(17)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
`;

export const ContentAttendance = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const AttendanceStore = styled.Text`
    margin-bottom: ${RFValue(4)}px;
    color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(17)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
`;

export const TimeStore = styled.Text`
    margin-top: ${RFValue(4)}px;
    color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(17)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
`;

export const ViewMap = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;
    border: solid 1px ${({theme}) => theme.COLORS.PLACEHOLDER};
`;

export const ImageMap = styled.Image`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
    border-radius: ${RFValue(15)}px;
    border: solid 1px ${({theme}) => theme.COLORS.PLACEHOLDER};
`;