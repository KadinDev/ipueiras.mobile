import React, {useEffect, useState, useContext} from "react"
import {View} from 'react-native'

import {
    Container,
    BackgroundAlertMessage,
    ContainerAlertMessage,
    AlertMessage,
    CloseAlertMessage,
    Text,
    HeaderHome,
    ButtonHeader,
    ViewScrollMenuSearch,
    ScrollMenuSearch,
    Title,
    ContentStores,
    EmptyStore
} from './styles'

import theme from '../../theme'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'
import { ButtonFilterHome } from '@components/ButtonFilterHome'
import { StoreCard } from '@components/StoreCard'
import { Load } from '@components/Load'

import { CategoryProps,} from '../../dtos/CategoryDTO'
import { StoreProps } from '../../dtos/StoryUserDTO'
import { MeProps } from '../../dtos/MeDTO'

import { api } from '../../services/api'
import { AuthContext } from '@hooks/auth'

export function Home() {
    const { isAuthenticated, signOut, user } = useContext(AuthContext)

    const navigation = useNavigation()
    const [messageAlerNavigationMap, serMessageAlertNavigationMap] = useState(false)
    const [loadStores, setLoadStores] = useState(false)
    
    const [categories, setCategories] = useState<CategoryProps[]>([])
    const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>() // sem [], vai ser um objeto

    const [store, setStore] = useState<StoreProps[]>([])
    
    useEffect(() => {
        setLoadStores(true)
        async function loadAllStores(){
            const response = await api.get('/home')
            setStore(response.data)
            setLoadStores(false)
        }
        loadAllStores()
    }, [])

    // Categories
    useEffect(() => {
        setLoadStores(true)
        async function loadCategories(){
            const response = await api.get('/category')
            setCategories(response.data)
            setCategorySelected(response.data[0])
            setLoadStores(false)
        }
        loadCategories()
    },[])

    // Lojas por Categoria
    useEffect(() => {
        setLoadStores(true)
        setStore([])
        async function LoadStores(){
            const response = await api.post('/category', {
                category_id: categorySelected?.id
            })
            setStore(response.data)
            setLoadStores(false)
        }
        LoadStores()
    },[categorySelected])

    // active category
    function handleChangeCategory(item: CategoryProps){
        setCategorySelected(item)
    }
    
    // mandando toda a loja selecionada para a pagina de detalhes da loja
    function handleViewStoreUser( store: StoreProps ){
        navigation.navigate('DetailStore', {store} )
    }

    function handleLogin(){
        if (isAuthenticated) {
            signOut() // se tiver logado, vai deslogar
        } else {
            navigation.navigate('Login')
        }
    }

    function handleMyStore(){
        navigation.navigate('Me')
    }

    return(
        <Container>

            { messageAlerNavigationMap && (
                <BackgroundAlertMessage>
                    <ContainerAlertMessage>
                        <AlertMessage>
                            Atenção!  {'\n'}
                            Ao navegar para o mapa da cidade, é obrigatório permitir que o App acesse sua localização.  {'\n'} 
                            Caso contrário você não terá acesso as navegações pelo mapa.
                        </AlertMessage>
                        <CloseAlertMessage
                        onPress={() => {serMessageAlertNavigationMap(false)}}
                        >
                            <Icon color={theme.COLORS.WHITE_600} size={RFValue(20)} icon='close' />
                        </CloseAlertMessage>
                    </ContainerAlertMessage>
                </BackgroundAlertMessage>
            ) } 

            <HeaderHome>
                <Text> Home </Text>
                
                <View style={{
                    flexDirection: 'row', 
                    width: RFValue(80), 
                    justifyContent: isAuthenticated ? 'space-between' : 'flex-end',
                    alignSelf: 'center'
                }}>
                    { isAuthenticated && (
                        <ButtonHeader onPress={handleMyStore}>
                            <Icon
                                color={theme.COLORS.ORANGE_700}
                                size={RFValue(25)}
                                icon='store'
                            />
                        </ButtonHeader>                    
                    ) }

                    <ButtonHeader
                    onPress={handleLogin}
                    >
                        <Icon
                            color={theme.COLORS.ORANGE_700}
                            size={RFValue(25)}
                            icon={isAuthenticated ? 'logout' : 'login'}
                        />
                    </ButtonHeader>
                </View>

            </HeaderHome>

            <ViewScrollMenuSearch>
                <ScrollMenuSearch
                    data={categories}
                    keyExtractor={item => item.id}
                    renderItem={ ({item}) => 
                        
                        <ButtonFilterHome
                            key={item.id}
                            title={item.name}
                            selected={ categorySelected === item }
                            onPress={ () => handleChangeCategory(item) }
                        />
                    }
                />
            </ViewScrollMenuSearch>
            
            <Title> {categorySelected?.name} </Title>
                
            {loadStores && <View style={{marginTop: RFValue(10)}}>
                <Load size={RFValue(35)} />
            </View>}

            <ContentStores
                data={store}
                keyExtractor={item => item.id}
                renderItem={ ({item}) => (
                    <StoreCard
                        key={item.id}
                        data={item}
                        handleViewStore={() => handleViewStoreUser(item)}
                    />
                ) }

                numColumns={2}
                contentContainerStyle={{
                    paddingBottom: RFValue(150),
                    paddingRight: RFValue(10)
                }}
                keyboardShouldPersistTaps='never'

                ListEmptyComponent={() => (
                    <EmptyStore>
                        <Icon
                            color={theme.COLORS.ORANGE_700}
                            size={RFValue(30)}
                            icon='no-food'
                        />
                    </EmptyStore>
                )}
            />


        </Container>
    )
}