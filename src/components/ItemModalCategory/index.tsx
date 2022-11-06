import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    Content,
    Scroll,
    Button,
    Title,
} from './styles'

import { CategoryProps } from '../../dtos/CategoryDTO'

interface Props extends TouchableOpacityProps {
    options: CategoryProps[];
    handleCloseModal: () => void;
    selectedItem: (item: CategoryProps) => void;
}


export function ItemModalCategory( {options, handleCloseModal, selectedItem, ...rest} : Props ){

    function itemCategorySelect (item: CategoryProps){
        selectedItem(item)
        handleCloseModal()
    }

    return (
        <Container>
            <Content>
                <Scroll>
                    { options.map((item, index) => (
                        <Button
                            key={index}
                            {...rest}
                            onPress={ () => itemCategorySelect(item)}
                        >
                            <Title> {item.name} </Title>
                        </Button>
                    ) ) }
                </Scroll>
            </Content>

        </Container>
    )
}