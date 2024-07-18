import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import Icon from "../../../../components/icon/Icon";
import {Button} from "../../../../components/button/Button";

type ServicePropsType = {
    icon?: {
        id: string,
        width: string,
        height: string
    },
    title: string,
    descripion: string
    link?: string;
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <FlexWrapper direction="column" alignItems="center">
                {props.icon && <Icon id={props.icon.id} width={props.icon.width} height={props.icon.height}/>}
                <Title>{props.title}</Title>
                <Description>{props.descripion}</Description>
                {props.link && <Button text="Order now" icon={{id: "little-arrow", width: "6", height: "8"}} href={props.link}/>}
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    max-width: 310px;
    width: 100%;
    min-height: 225px;
    background-color: #4598af;
`

const Title = styled.h3`
    
`

const Description = styled.p`

`