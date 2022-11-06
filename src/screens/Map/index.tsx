import React, {useEffect, useState} from 'react'

import { 
    Platform, 
    PermissionsAndroid, 
    Dimensions, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert,
} from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { 
    Container,
    ContainerHeader,
    Search,
    MyLocation
} from './styles'

import theme from '../../theme'

import { Icon } from '@components/Icon'
import { Load } from '@components/Load'
import { Input } from '@components/Input'

import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location';
import { customStyle } from '@utils/customStyleMap'

import { useNavigation } from '@react-navigation/native'

const { height, width } = Dimensions.get('screen')

type MapProps = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number
}

export function Map(){
    const navigation = useNavigation()
    const [regionUser, setRegionUser] = useState<MapProps>()
    const [mudaMap, setMudaMap] = useState(false)

    useEffect(() => {
        setRegionUser({
            latitude: -4.5420152,
            longitude: -40.7217252,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        })
    },[])

    async function getMyLocation(){
        let {status} = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted') {
            console.log('A permissão para acessar o local foi negada')
            
            setRegionUser({
                latitude: -4.5420152,
                longitude: -40.7217252,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            })
            //Alert.alert('Error!', 'Você negou permissão para o App obter sua localização no mapa')
            return; 
        }

        let location = await Location.getCurrentPositionAsync({})
        
        setRegionUser({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        })

    }

    function handleUserPermissionMap(){
        Platform.OS === 'android' ?
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            .then(() => {
                console.log('usuario aceitou')
            })
        :             
        console.log('Error') // aqui posso redirecionar o user ou bloquear rota para onde ele quer ir
    }


    return (
        <Container>  

            <ContainerHeader>
                <Search onPress={() => setMudaMap(true) }>
                    <Icon
                        size={RFValue(25)}
                        color={theme.COLORS.ORANGE_500}
                        icon='map'
                    />
                </Search>

                <Input
                    size="search"
                    placeholder="o que procura?"
                />

                <Search onPress={() => alert('oi')} >
                    <Icon
                        size={RFValue(25)}
                        color={theme.COLORS.ORANGE_500}
                        icon='search'
                    />
                </Search>
            </ContainerHeader>


            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <MapView
                    style={{
                        width: width, height: height, position: 'absolute'
                    }}

                    region={regionUser}
                    /*initialRegion={{
                        latitude: -4.5441426,
                        longitude: -40.7266187,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}*/

                    // o que fazer quando o mapa carregar
                    onMapReady={handleUserPermissionMap}

                    zoomEnabled={true} // posso dar zoom no mapa
                    minZoomLevel={13}
                    showsUserLocation={true} // para mostrar a bolinha de onde o user esta no mapa
                    loadingEnabled={true}

                    //onPress={() => alert('Clicou')}
                    
                    // mudando estilo do mapa 
                    customMapStyle={ mudaMap ? customStyle : undefined }

                />

                
            </TouchableWithoutFeedback>

            <MyLocation
                onPress={getMyLocation}
            >
                <Icon
                    size={RFValue(25)}
                    color={theme.COLORS.PRIMARY}
                    icon='my-location'
                />
            </MyLocation>

        </Container>
    )
}