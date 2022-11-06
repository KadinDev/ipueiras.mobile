import React, {useState} from 'react'
import { TextInputProps } from 'react-native'

import {
    TypeProps,
    Container
} from './styles'

export type InputProps = TextInputProps & {
    size: TypeProps;
    value?: string;
}

export function Input({size, value, ...rest} : InputProps){

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    // quando input estiver em foco
    function handleInputFocus(){
        setIsFocused(true);
    };

    // quando sair do input
    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!value)
    }

    return(
        <Container
            size={size}
            {...rest}

            // ao entrar no inoput
            onFocus={handleInputFocus}
            // ao sair do input
            onBlur={handleInputBlur}
            isFocused={isFocused}
            value={value}
        />
    )
}