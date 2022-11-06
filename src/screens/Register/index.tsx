import React, { useState, useContext } from "react"
import {
    Container,
    Content,
    ContentInput,
    Button,
    TextButton,
    ViewRegister,
    ButtonVisiblePassword,
    ButtonRegister,
    TitleRegister,
    IconBack
} from './styles'

import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native'

import imageBackground from '../../assets/backregister.jpg'
import { RFValue } from 'react-native-responsive-fontsize'
import {Input} from '@components/Input'
import {Icon} from '@components/Icon'
import {Load} from '@components/Load'

import theme from "../../theme"
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '@hooks/auth'

export function Register() {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [truePass, setTruePass] = useState(true)

    const { signUp, isLogging } = useContext(AuthContext)

    function handleVisiblePass(){
        setTruePass(!truePass)
    }

    async function handleSignUp(){
        await signUp({ name, email, password })
    }

    return(
        <Container
            resizeMode='cover'
            source={imageBackground}
        >

            <IconBack
            onPress={() => navigation.goBack()}
            >
                <Icon icon='arrow-back' color={theme.COLORS.ORANGE_700} size={RFValue(20)} />
            </IconBack>

            <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            >
                <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <Content>

                        <ContentInput>
                            <Icon icon='person' color={theme.COLORS.ORANGE_700} size={RFValue(20)} />
                            <Input
                                placeholder="Paulo Aragão"
                                size='login'

                                value={name}
                                onChangeText={setName}
                            />
                        </ContentInput>

                        <ContentInput>
                            <Icon icon='email' color={theme.COLORS.ORANGE_700} size={RFValue(20)} />
                            <Input
                                placeholder="joao@joao.com"
                                size='login'

                                value={email}
                                onChangeText={setEmail}
                            />
                        </ContentInput>

                        <ContentInput>
                            <Icon icon='security' color={theme.COLORS.ORANGE_700} size={RFValue(20)}/>
                            <Input
                                placeholder="******"
                                size='login'
                                secureTextEntry={truePass}

                                value={password}
                                onChangeText={setPassword}
                            />
                            <ButtonVisiblePassword onPress={handleVisiblePass}>
                                <Icon icon={truePass ? 'lock' : 'lock-open'} color={theme.COLORS.ORANGE_700} size={RFValue(20)}/>
                            </ButtonVisiblePassword>
                        </ContentInput>

                        <Button onPress={handleSignUp}>
                            { isLogging ? (
                                <Load size={RFValue(20)}/>
                            ) : (
                                <TextButton> Cadastrar </TextButton>
                            ) }
                        </Button>

                        <ViewRegister>
                            <ButtonRegister onPress={() => navigation.navigate('Login') }>
                                <TitleRegister>
                                    Já tem conta? fazer login
                                </TitleRegister>
                            </ButtonRegister>
                        </ViewRegister>
                    </Content>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

        </Container>
    )
}