import React, {useState, useContext, useCallback} from "react"

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

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Icon } from '@components/Icon'
import instagram from '../../assets/instagram.png'
import whatsApp from '../../assets/whatsapp.png'
import MapView, {Marker} from 'react-native-maps'

import { api } from '../../services/api'
import { MeProps } from '../../dtos/MeDTO'
import { AuthContext } from '@hooks/auth'

export function Me() {
    const navigation = useNavigation();
    const { signOut } = useContext(AuthContext)

    const [loadStore, setLoadStore] = useState(false)
    const [myDetails, setMyDetails] = useState<MeProps>()
    console.log(myDetails)

    async function loadMyInfo(){
        setLoadStore(true)
        const response = await api.get('/me')
        setMyDetails(response.data)
        setLoadStore(false)
    }
    
    useFocusEffect(
        useCallback( () => {
            loadMyInfo()
        }, [] )
    )

    function handleNavigateRegisterStore(){
        navigation.navigate('RegisterStore')
    }

    return(
        <Container>
            <StatusBar style='light' translucent backgroundColor="transparent" />
            <ScrollContainer>

                <Header>
                    <ActionsHeader>
                        <ButtonHeader onPress={() => navigation.goBack()}>
                            <Icon 
                                icon='arrow-back'
                                size={RFValue(17)} 
                                color={theme.COLORS.ORANGE_700}  
                            />
                        </ButtonHeader>

                        { myDetails?.store?.name ? (
                            <ButtonHeader onPress={() => alert('Atualizar Store')}>
                                <Icon 
                                    icon='update'
                                    size={RFValue(17)} 
                                    color={theme.COLORS.ORANGE_700}  
                                />
                            </ButtonHeader>
                        ) : (
                            <ButtonHeader onPress={ handleNavigateRegisterStore }>
                                <Icon 
                                    icon='store-mall-directory'
                                    size={RFValue(17)} 
                                    color={theme.COLORS.ORANGE_700}  
                                />
                            </ButtonHeader>
                        ) }

                        <ButtonHeader onPress={() => signOut() }>
                            <Icon 
                                icon='logout'
                                size={RFValue(20)} 
                                color={theme.COLORS.ORANGE_700}  
                            />
                        </ButtonHeader>

                    </ActionsHeader>

                    <ImageStore
                        source={{ uri: `${api.defaults.baseURL}/files/${myDetails?.store?.banner}` }}
                    />

                </Header>
                
                <ContentStore>
                    <HeaderContentStore>
                        <TitleStore numberOfLines={2}> {myDetails?.store?.name} </TitleStore>

                        <ViewAddress>
                            <Icon icon='location-on' size={RFValue(20)} color={theme.COLORS.ORANGE_700}/>
                            <AddressStore> {myDetails?.store?.address} </AddressStore>
                        </ViewAddress>

                    </HeaderContentStore>

                    <HeaderContentDescription>
                        <CategoryStore> descrição </CategoryStore>
                        <DescriptionStore> {myDetails?.store?.description} </DescriptionStore>
                    </HeaderContentDescription>

                    <ContentContact>
                        <Social>
                            <ImageSocial source={whatsApp} />
                            <ContactStore> {myDetails?.store?.contact} </ContactStore>
                        </Social>
                        <Social>
                            <ImageSocial source={instagram} />
                            <ContactStore> {myDetails?.store?.instagram} </ContactStore>
                        </Social>
                    </ContentContact>

                    <ContentAttendance>
                        <AttendanceStore> {myDetails?.store?.time} </AttendanceStore>
                        <Icon icon='timer' size={RFValue(20)} color={theme.COLORS.ORANGE_700}/>
                        <TimeStore> {myDetails?.store?.attendance} </TimeStore>
                    </ContentAttendance>

                    <ViewMap>
                        <MapView
                            style={{
                                width: '100%', height: '100%'
                            }}
                            initialRegion={{
                                latitude: -4.533905,
                                longitude: -40.716013,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            }}

                            minZoomLevel={17}
                            showsUserLocation={true}
                            zoomEnabled={true}
                            rotateEnabled={false}
                            scrollEnabled={false}
                        >
                            <Marker
                                coordinate={{
                                    latitude: -4.533905,
                                    longitude: -40.716013,
                                }}
                            >
                                <ImageMap
                                    source={{ uri: 'https://blog.ferimport.com.br/wp-content/uploads/2021/07/marceneiro.png' }} 
                                />

                            </Marker>
                        </MapView>
                    </ViewMap>
                    
                    <TitleStore numberOfLines={2}> Loja de {myDetails?.name} </TitleStore>

                    <ViewAddress>
                        <AddressStore> {myDetails?.store?.address} </AddressStore>
                    </ViewAddress>

                </ContentStore>
               
            </ScrollContainer>
        </Container>
    )
}