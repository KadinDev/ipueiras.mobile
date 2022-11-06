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

import { StoreProps } from '../../dtos/StoryUserDTO'

type Props = TouchableOpacityProps & {
    data: StoreProps;
    handleViewStore: (id: string) => void;
}

export function StoreCard( { data, handleViewStore, ...rest } : Props ){
    //const bannerStore = `http://localhost:3333/files/${data.banner}`
    //console.log(bannerStore)  
    // 'https://storage.googleapis.com/golden-wind/ignite/react-native/thumbnails/1.png'

    return (
        <Container 
            {...rest}
            onPress={() => handleViewStore(data.id)}
        >
            <ImageStore source={{ uri : `https://okawalivros.com.br/wp-content/uploads/2018/04/seja-uma-pessoa-alegre-o-ano-inteiro-1080x675.jpg` }} />

            <Content>
                <Title numberOfLines={1} > {data.name} </Title>
            </Content>
        </Container>
    )
}