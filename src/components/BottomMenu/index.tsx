import React, {ReactNode} from 'react';

import {
    Container,
    Title,
    ActiveButtonTabProps,
    ViewBorder,
    Border,
} from './styles';

interface Props extends ActiveButtonTabProps {
    title: string;
    color: string;
    children: ReactNode;
}

export function BottomMenu( {title, color, children, selected } : Props ){

    return (
        <Container>
            <Title color={color}> {title} </Title>

           

            {children}

        </Container>
    );
}