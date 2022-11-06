import React from 'react'
import { TextInputProps } from 'react-native'

import {
    Error,
    IconError
} from './styles'

import {
    Control,
    Controller,
    FieldError
} from 'react-hook-form'

import { InputProps, Input } from '@components/Input'

type Props = InputProps & {
    control: Control<any>;
    name: string;
    error?: FieldError
}

export function ControlledInput( {control, name, error, ...rest} : Props ){
    return (
        <>
            <Controller
                name={name}
                control={control}

                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
            />

            { error &&  
                <>
                    <Error> {error.message} </Error>
                </>
            }

        </>
    )
}