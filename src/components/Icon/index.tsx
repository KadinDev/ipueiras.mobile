import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import {
    Container
} from './styles'

interface IconProps {
    icon: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
    size: number
}

export function Icon({icon, color, size} : IconProps){
    return (
        <Container
            name={icon}
            color={color}
            size={size}
        />
    )
}