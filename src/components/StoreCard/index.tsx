import React from "react"
import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    Title,
    ImageStore,
    Content
} from './styles'

import theme from '../../theme'
import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'
import { RectButtonProps } from 'react-native-gesture-handler'

import { api } from '../../services/api'

import { StoreProps } from '../../dtos/StoryUserDTO'

type Props = TouchableOpacityProps & {
    data: StoreProps;
    handleViewStore: (id: string) => void;
}

export function StoreCard( { data, handleViewStore, ...rest } : Props ){

    return (
        <Container 
            {...rest}
            activeOpacity={0.4}
            onPress={() => handleViewStore(data.id)}
        >
            <ImageStore source={{ uri: `${api.defaults.baseURL}/files/${data.banner}` }} />

            <Content>
                <Title numberOfLines={1} > {data.name} </Title>
            </Content>
        </Container>
    )
}