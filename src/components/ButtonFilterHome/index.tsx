import React from 'react'
import { TouchableOpacityProps } from 'react-native'


import {
    ButtonActive,
    Container,
    Title
} from './styles'

type Props = TouchableOpacityProps & ButtonActive & {
    title: string;
}
export function ButtonFilterHome({title, selected = true, ...rest} : Props){
    return (
        <Container selected={selected} {...rest} > 
            <Title selected={selected}> {title} </Title>
        </Container>
    )
}
