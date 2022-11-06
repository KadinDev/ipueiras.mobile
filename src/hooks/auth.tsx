import React, {
    createContext,
    ReactNode,
    useState,
    useEffect
} from 'react'

import { Alert } from 'react-native';

import { api } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
}

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean; // para ver se o user esta logado ou nao
    isLogging: boolean;
    signIn: ( user: SignInProps ) => Promise<void>;
    signUp: ( data: SignUpProps ) => Promise<void>;
    signOut: () => Promise<void>;
    //forgotPassword: (email: string) => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode
}

const USER_COLLECTION = '@user:users'

export const AuthContext = createContext( {} as AuthContextData )

export function AuthProvider( {children} : AuthProviderProps ){

    const [isLogging, setIsLogging] = useState(false)
    const [user, setUser] = useState<UserProps>({
        id: '', name: '', email: '', token: ''
    })
    
    const isAuthenticated = !!user?.name // se ele fez login ou não

    useEffect(() => {
        loadStorageUser()
    },[])
    
    async function signIn( {email, password} : SignInProps ){
        if(!email){
            return Alert.alert('Email', 'Informe seu E-mail.')
        }

        if(!password){
            return Alert.alert('Senha', 'Informe sua senha.')
        }

        setIsLogging(true)

        try {
            const response = await api.post('/login', {
                email,
                password
            })

            const {id, name, token} = response.data
            const data = {
                ...response.data
            }

            // salvando no asyncstorage como objeto
            await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(data))

            // passando o token para as proximas requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setUser({
                id, name, email, token
            })

        } catch (error) {
            Alert.alert('Dados', 'Por favor, verifique se os dados informados estão corretos.')
            setIsLogging(false)
        }

        setIsLogging(false)
    }

    async function signUp({name, email, password} : SignUpProps ){
        if(!name){
            return Alert.alert('Nome', 'Informe seu nome.')
        }
        if(!email){
            return Alert.alert('Email', 'Informe seu E-mail.')
        }
        if(!password){
            return Alert.alert('Senha', 'Informe sua senha.')
        }

        setIsLogging(true)

        try {
            const response = await api.post('/register', {
                name,
                email,
                password
            })

            const {id, token} = response.data
            const data = {
                ...response.data
            }

            // salvando no asyncstorage como objeto
            await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(data))

            // passando o token para as proximas requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setUser({
                id, name, email, token
            })

        } catch (error) {
            console.log(error)
            setIsLogging(false)
        }

        setIsLogging(false)
    }

    async function signOut(){
        await AsyncStorage.clear().then(() => {
            setUser({
                id: '',
                name: '',
                email: '',
                token: ''
            })
        })
    }

    async function loadStorageUser(){
        setIsLogging(true)
        const userInfo = await AsyncStorage.getItem(USER_COLLECTION)
        let hasUser: UserProps = JSON.parse(userInfo || '{}')

        //verificar se recebemos informações do user
        if(Object.keys(hasUser).length > 0){
            //informando o token para as proximas requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

            setUser({
                id: hasUser.id,
                name: hasUser.name,
                email: hasUser.email,
                token: hasUser.token
            })
        }

        setIsLogging(false)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isLogging,
                isAuthenticated,

                signIn,
                signUp,
                signOut
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

/*
function useAuth(){
    const context = useContext(AuthContext)
    return context
}
*/