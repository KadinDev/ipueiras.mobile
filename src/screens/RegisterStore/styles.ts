import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(10)}px ${RFValue(20)}px;

`  

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + RFValue(10)
    }    
})`
    width: 100%;
`;

export const Form = styled.View`
    width: 100%;
    padding: 0 ${RFValue(20)}px ${RFValue(100)}px;
`;

export const ViewTitle = styled.View`
    background-color: ${({theme}) => theme.COLORS.ORANGE_500};
    margin-bottom: ${RFValue(20)}px;
    margin-top: ${RFValue(20)}px;
    border-radius: ${RFValue(5)}px;
    padding: ${RFValue(5)}px;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    text-transform: uppercase;
`;

export const ContentInputBanner = styled.View`
    position: relative;
    width: 100%;
    height: ${RFValue(250)}px;
    border: dashed 1px ${({theme}) => theme.COLORS.ORANGE_500};
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(5)}px;
`;


export const ButtonAddBanner = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    position: absolute;
`;

export const ContentInput = styled.View`
    margin-bottom: ${RFValue(15)}px;
`;

export const HeaderTitleInput = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitleInput = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    opacity: 0.7;
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
    margin-bottom: ${RFValue(2)}px;
`;

export const ViewInput = styled.View`
    position: relative;
    flex-direction: row;
    align-items: center;
`;


export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    background-color: ${({theme}) => theme.COLORS.ORANGE_500};
    width: 100%;
    height: ${RFValue(40)}px;
    padding: ${RFValue(5)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(5)}px;
`;


export const ButtonCategory = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    height: ${RFValue(40)}px;
    width: 100%;
    padding: ${RFValue(5)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(5)}px;
    border: dashed 1px ${({theme}) => theme.COLORS.ORANGE_500};
    margin: ${RFValue(5)}px 0 ${RFValue(20)}px;
`;

export const TitleCategory = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
`;