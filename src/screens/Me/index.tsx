import React, {useState, useEffect} from "react"
import {
    Container,
    Header,
    ActionsHeader,
    ScrollContainer,
    ButtonHeader,
    ImageStore,
    ContentStore,
    HeaderContentStore,
    CategoryStore,
    HeaderContentDescription,
    TitleStore,
    DescriptionStore,
    ViewAddress,
    AddressStore,
    ContactStore,
    TimeStore,
    AttendanceStore,
    ContentContact,
    Social,
    ContentAttendance,
    ImageSocial,
    ViewMap,
    ImageMap
} from './styles'

import { StatusBar } from 'expo-status-bar'

import theme from '../../theme'
import { RFValue } from 'react-native-responsive-fontsize'

import { useNavigation, useRoute } from '@react-navigation/native'
import { MeProps } from '../../dtos/MeDTO'
import { StoreProps } from '../../dtos/StoryUserDTO'

import { Icon } from '@components/Icon'
import instagram from '../../assets/instagram.png'
import whatsApp from '../../assets/whatsapp.png'
import MapView, {Marker} from 'react-native-maps'

import { api } from '../../services/api'
import { AuthContext } from '@hooks/auth'


export function Me() {

    const navigation = useNavigation();
    const [loadStore, setLoadStore] = useState(false)
   
    const [myStore, setMyStore] = useState<MeProps>()

    useEffect(() => {
        setLoadStore(true)
        async function loadMyStore(){
            const response = await api.get('/me')
            setMyStore(response.data)
            setLoadStore(false)
        }
        loadMyStore()
    }, [])

    function handleNavigateRegisterStore(){
        navigation.navigate('RegisterStore')
    }

    return(
        <Container>
            <StatusBar style='light' />
            <ScrollContainer>

                <Header>
                    <ActionsHeader>
                        <ButtonHeader onPress={() => navigation.goBack()}>
                            <Icon 
                                icon='arrow-back'
                                size={RFValue(20)} 
                                color={theme.COLORS.ORANGE_700}  
                            />
                        </ButtonHeader>

                        { !myStore?.store?.name && 
                            <ButtonHeader onPress={ handleNavigateRegisterStore }>
                                <Icon 
                                    icon='skip-next'
                                    size={RFValue(20)} 
                                    color={theme.COLORS.ORANGE_700}  
                                />
                            </ButtonHeader>
                        }

                    </ActionsHeader>

                </Header>

                <ImageStore
                    source={{ uri:'https://blog.ferimport.com.br/wp-content/uploads/2021/07/marceneiro.png' }}
                />
                
                <TitleStore> { myStore?.name } </TitleStore>
            </ScrollContainer>
        </Container>
    )
}