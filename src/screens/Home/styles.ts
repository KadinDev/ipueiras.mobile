import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { FlatList, FlatListProps } from 'react-native';
import { CategoryProps } from '../../dtos/CategoryDTO'
import { StoreProps } from '../../dtos/StoryUserDTO'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    
`  

export const BackgroundAlertMessage = styled.View`
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

export const ContainerAlertMessage = styled.View`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    width: 80%;
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    position: relative;
`;

export const AlertMessage = styled.Text`
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    text-align: justify;
`;

export const CloseAlertMessage = styled.TouchableOpacity.attrs({
    activiOpacity: 0.8
})`
    position: absolute;
    top: ${RFValue(-18)}px;
    align-self: center;
    background-color: ${({theme}) => theme.COLORS.ORANGE_700};
    padding: ${RFValue(2)}px;
    border-radius: ${RFValue(50)}px;
    border: solid 5px ${({theme}) => theme.COLORS.PRIMARY};
`;


export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};

`;

export const HeaderHome = styled.View`
    padding: ${getStatusBarHeight() + RFValue(30)}px ${RFValue(20)}px 0 ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonHeader = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.COLORS.WHITE_600};
    border-radius: ${RFValue(50)}px;
    padding: ${RFValue(5)}px;
`;

export const ViewScrollMenuSearch = styled.View`
    height: ${RFValue(60)}px;
    margin-top: ${RFValue(5)}px;
`;

export const ScrollMenuSearch = styled(
    FlatList as new ( props: FlatListProps<CategoryProps> ) => FlatList<CategoryProps>
).attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    contentContainerStyle: {
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
    }
})`
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
    text-align: center;
    margin-bottom: ${RFValue(5)}px;
`;

export const ContentStores = styled(
    FlatList as new ( props: FlatListProps<StoreProps> ) => FlatList<StoreProps>
).attrs({
    showsVerticalScrollIndicator: false,
    horizontal: false,
})`
`;

export const EmptyStore = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 50%
`;

