import React, { useState, useEffect, useContext } from "react"
import {
    Container,
    Content,
    Form,
    ViewTitle,
    ContentInput,
    ContentInputBanner,
    ButtonAddBanner,
    HeaderTitleInput,
    Title,
    TitleInput,
    ViewInput,
    Button,
    ButtonCategory,
    TitleCategory,
} from './styles'

import {
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Modal,
    Image,
    Alert
} from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
//import {Input} from '@components/Input'
import {Icon} from '@components/Icon'
import {ItemModalCategory} from '@components/ItemModalCategory'

import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'

import { Load } from '@components/Load'
import { ControlledInput } from '@components/ControlledInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as ImagePicker from 'expo-image-picker'
import { CategoryProps } from '../../dtos/CategoryDTO'
import { api } from '../../services/api'
import { AuthContext } from '@hooks/auth'
import { StoreProps } from '../../dtos/StoryUserDTO'
import { MeProps } from '../../dtos/MeDTO'


export const schema = yup.object({
    name: yup.string().required('Informe o nome'),
    //email: yup.string().email('E-mail inválido').required('Informe seu e-mail'),
    //password: yup.string().min(6, 'Mínimo de 6 dígitos').required('Crie sua senha'),
    
    //password_confirm: yup.string().required('Confirme sua senha')
    //.oneOf([yup.ref('password')], 'Senhas devem ser iguais'),

    description: yup.string().required('Sua descrição'),
    contact: yup.string().required('Seu contato'),
    address: yup.string().required('Seu endereço'),
    time: yup.string().required('Seus dias de atendimento'),
    attendance: yup.string().required('Seus horários de atendimento'),
    //instagram: yup.string().required('Informe seu instagram'), // para não ser obrigatorio
})

export function RegisterStore() {
    const navigation = useNavigation()
    const {user} = useContext(AuthContext)

    const { COLORS, FONTS } = useTheme()

    // para funcionar no back-end, vai ser do tipo ImagePicker.ImageInfo
    const [image, setImage] = useState<ImagePicker.ImageInfo>({} as ImagePicker.ImageInfo)

    const [load, setLoad] = useState(false)
    const [modalSelectCategory, setModalSelectCategory] = useState(false)
    const [categories, setCategories] = useState<CategoryProps[]>([])
    const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>()

    useEffect(() => {
        async function loadCategories(){
            const response = await api.get('/category')
            setCategories(response.data)
            setCategorySelected(response.data[0])
        }
        loadCategories()
    },[])

    const { control, handleSubmit, formState: { errors } } = useForm<StoreProps>({
        resolver: yupResolver(schema)
    })

    function handleChangeCategory(item: CategoryProps){
        setCategorySelected(item)
    }

    async function handlePickerImage(){
        const {status} = await ImagePicker.requestCameraPermissionsAsync()

        if(status === 'granted'){
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [ 4, 4]
            });

            if(!result.cancelled){
                setImage(result);
            }
        }

    }

    async function handleRegisterStore(store: StoreProps){
        if (!image){
            return Alert.alert('Imagem', 'Envie uma imagem!')
        }
        if(!categorySelected){
            return Alert.alert('Categoria', 'Selecione sua categoria!')
        }

        try {           
            setLoad(true) 

            // tratando imagem para enviar para o back
            const fileExtension = image.uri.split('.').pop()
            const photoFile = {
                name: `${user.name}.${fileExtension}`.toLowerCase(),
                uri: image.uri,
                type: `${image.type}/${fileExtension}`
            } as any

            const formData = new FormData()

            // aqui são os mesmos nomes que o back espera, assim como tem no Insomnia
            formData.append('name', store.name)
            formData.append('description', store.description)
            formData.append('file', photoFile )
            formData.append('contact', store.contact)
            formData.append('address', store.address)
            formData.append('time', store.time)
            formData.append('attendance', store.attendance)
            formData.append('instagram', store.instagram)
            formData.append('category_id', categorySelected.id)

            const response = await api.post('/newstore', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            navigation.navigate('Me')
            setLoad(false)
            console.log(response)

        } catch (error) {
            console.log(error)
            setLoad(false)
        }
    }
 
    return(
        <Container >
            
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >

                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={() => navigation.goBack()}
                        style={{marginLeft: RFValue(15), marginBottom: RFValue(20)}}
                    >
                        <Icon icon='arrow-back' color={COLORS.ORANGE_500} size={RFValue(20)} />
                    </TouchableOpacity>

                    <Content>
                        <Form>

                            <ViewTitle>
                                <Title> Criar página </Title>
                            </ViewTitle>

                            <ContentInput>
                                <TitleInput> Adicionar Imagem </TitleInput>
                                <ContentInputBanner>
                                    <Image 
                                        resizeMode='cover'
                                        style={{width: '100%', height: '100%'}} 
                                        source={{uri: image ? image.uri : 'no-file'}} 
                                    />
                                    <ButtonAddBanner onPress={handlePickerImage}>
                                        <Icon 
                                            icon='add-a-photo' 
                                            color={!image.uri ? COLORS.ORANGE_500 : COLORS.WHITE_600} 
                                            size={RFValue(40)} 
                                        />
                                    </ButtonAddBanner>
                                </ContentInputBanner>
                            </ContentInput>

                            <ContentInput>
                                <HeaderTitleInput>
                                    <TitleInput> Nome / loja / profissão </TitleInput>
                                    <Icon icon='person' color={COLORS.ORANGE_500} size={RFValue(20)} />
                                </HeaderTitleInput>
        
                                <ViewInput>
                                    <ControlledInput
                                        control={control}
                                        name='name'
                                        error={errors.name}
                                        size='register'

                                        autoCorrect={false}
                                        placeholder='Seu nome'
                                    />
                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <HeaderTitleInput>
                                    <TitleInput> Descrição </TitleInput>
                                    <Icon icon='description' color={COLORS.ORANGE_500} size={RFValue(20)} />
                                </HeaderTitleInput>

                                <ViewInput>
                                    <ControlledInput
                                        control={control}
                                        name='description'
                                        error={errors.description}
                                        size='register'

                                        autoCorrect={false}
                                        placeholder='Adicione sua descrição'
                                        multiline
                                        style={{ minHeight: RFValue(150), textAlignVertical: 'top',
                                        paddingTop: RFValue(10), paddingBottom: RFValue(10) }}
                                    />
                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <HeaderTitleInput>
                                    <TitleInput> Contato </TitleInput>
                                    <Icon icon='call' color={COLORS.ORANGE_500} size={RFValue(20)} />
                                </HeaderTitleInput>

                                <ViewInput>
                                    <ControlledInput
                                        control={control}
                                        name='contact'
                                        error={errors.contact}
                                        size='register'

                                        autoCorrect={false}
                                        placeholder='88996965524'
                                        keyboardType="numeric"
                                    />
                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <HeaderTitleInput>
                                    <TitleInput> Endereço </TitleInput>
                                    <Icon icon='location-on' color={COLORS.ORANGE_500} size={RFValue(20)} />
                                </HeaderTitleInput>

                                <ViewInput>
                                    <ControlledInput
                                        control={control}
                                        name='address'
                                        error={errors.address}
                                        size='register'

                                        autoCorrect={false}
                                        placeholder='Seu endereço e referência'
                                    />
                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <HeaderTitleInput>
                                    <TitleInput> Dias de Atendimento </TitleInput>
                                    <Icon icon='calendar-today' color={COLORS.ORANGE_500} size={RFValue(20)} />
                                </HeaderTitleInput>
                                
                                <ViewInput>
                                    <ControlledInput
                                        control={control}
                                        name='time'
                                        error={errors.time}
                                        size='register'

                                        autoCorrect={false}
                                        placeholder='Ex: De Seg a Sab'
                                    />
                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <HeaderTitleInput>
                                    <TitleInput> Horário de Atendimento </TitleInput>
                                    <Icon icon='watch-later' color={COLORS.ORANGE_500} size={RFValue(20)} />
                                </HeaderTitleInput>
                                
                                <ViewInput>
                                    <ControlledInput
                                        control={control}
                                        name='attendance'
                                        error={errors.attendance}
                                        size='register'

                                        autoCorrect={false}
                                        placeholder='Ex: Das 7hrs as 17hrs'
                                    />
                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <HeaderTitleInput>
                                    <TitleInput> Instagram </TitleInput>
                                    <Icon icon='mark-chat-unread' color={COLORS.ORANGE_500} size={RFValue(20)} />
                                </HeaderTitleInput>
                                
                                <ViewInput>
                                    <ControlledInput
                                        control={control}
                                        name='instagram'
                                        //error={errors.instagram}
                                        size='register'

                                        autoCorrect={false}
                                        placeholder='Compartilhe seu Instagram'
                                    />
                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <HeaderTitleInput>
                                    <TitleInput> Categoria </TitleInput>
                                    <Icon icon='category' color={COLORS.ORANGE_500} size={RFValue(20)} />
                                </HeaderTitleInput>
                                
                                <ViewInput>
                                    <ButtonCategory
                                        onPress={() => setModalSelectCategory(true)}
                                    >
                                        <TitleCategory> {categorySelected?.name} </TitleCategory>
                                    </ButtonCategory>
                                </ViewInput>
                            </ContentInput>

                            <Button onPress={ handleSubmit(handleRegisterStore) }>
                                { load ? (
                                    <Load size={RFValue(20)} />
                                ) : (
                                    <Title> Registrar </Title>
                                ) }
                            </Button>

                            <Modal
                            transparent={true}
                            visible={modalSelectCategory}
                            animationType='slide'
                            >
                                <ItemModalCategory
                                    handleCloseModal={() => setModalSelectCategory(false)}
                                    options={categories}
                                    selectedItem={handleChangeCategory}
                                />
                            </Modal>


                        </Form>
                    </Content>

                </KeyboardAvoidingView>

            </TouchableWithoutFeedback>

        </Container>
    )
}