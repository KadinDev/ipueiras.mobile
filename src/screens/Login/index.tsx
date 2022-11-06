import React, { useState, useContext } from "react"
import {
    Container,
    Content,
    TitleContent,
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

import imageBackground from '../../assets/backlogin.jpg'
import { RFValue } from 'react-native-responsive-fontsize'
import {Input} from '@components/Input'
import {Icon} from '@components/Icon'
import {Load} from '@components/Load'

import theme from "../../theme"
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '@hooks/auth'

export function Login() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [truePass, setTruePass] = useState(true)

    const { signIn, isLogging } = useContext(AuthContext)

    function handleVisiblePass(){
        setTruePass(!truePass)
    }

    async function handleSignIn(){
        await signIn({ email, password })
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
                        <TitleContent> Bem vindo </TitleContent>

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

                        <Button onPress={handleSignIn}>
                            { isLogging ? (
                                <Load size={RFValue(20)}/>
                            ) : (
                                <TextButton> Entrar </TextButton>
                            ) }
                        </Button>

                        <ViewRegister>
                            <ButtonRegister onPress={() => navigation.navigate('Register') }>
                                <TitleRegister>
                                    Ainda não tem conta? Registre-se
                                </TitleRegister>
                            </ButtonRegister>
                        </ViewRegister>
                    </Content>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

        </Container>
    )
}