import React from "react"
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
import { StoreProps } from '../../dtos/StoryUserDTO'

import { Icon } from '@components/Icon'
import instagram from '../../assets/instagram.png'
import whatsApp from '../../assets/whatsapp.png'
import MapView, {Marker} from 'react-native-maps'

interface Params {
    store: StoreProps;
}

export function DetailStore() {
    const navigation = useNavigation();
    const route = useRoute();

    const { store } = route.params as Params;

    function handleAddStoreFavorite(store: StoreProps){
        alert(store.name)
    }

    const bannerStore = `https://blog.ferimport.com.br/wp-content/uploads/2021/07/marceneiro.png`
    console.log(bannerStore)

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

                        <ButtonHeader onPress={() => handleAddStoreFavorite(store)}>
                            <Icon 
                                icon='favorite-outline'
                                size={RFValue(20)} 
                                color={theme.COLORS.ORANGE_700}  
                            />
                        </ButtonHeader>
                    </ActionsHeader>

                    <ImageStore
                        source={{ uri: bannerStore }}
                    />

                </Header>


                <ContentStore>
                    <HeaderContentStore>
                        <CategoryStore> {store.category?.name} </CategoryStore>
                        <TitleStore numberOfLines={2}> {store.name} </TitleStore>

                        <ViewAddress>
                            <Icon icon='location-on' size={RFValue(20)} color={theme.COLORS.ORANGE_700}/>
                            <AddressStore> {store.address} </AddressStore>
                        </ViewAddress>

                    </HeaderContentStore>

                    <HeaderContentDescription>
                        <CategoryStore> descrição </CategoryStore>
                        <DescriptionStore> {store.description} </DescriptionStore>
                    </HeaderContentDescription>

                    <ContentContact>
                        <Social>
                            <ImageSocial source={whatsApp} />
                            <ContactStore> {store.contact} </ContactStore>
                        </Social>
                        <Social>
                            <ImageSocial source={instagram} />
                            <ContactStore> {store.instagram} </ContactStore>
                        </Social>
                    </ContentContact>

                    <ContentAttendance>
                        <AttendanceStore> {store.time} </AttendanceStore>
                        <Icon icon='timer' size={RFValue(20)} color={theme.COLORS.ORANGE_700}/>
                        <TimeStore> {store.attendance} </TimeStore>
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
                
                
                </ContentStore>

            </ScrollContainer>
        </Container>
    )
}