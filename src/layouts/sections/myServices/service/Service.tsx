import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import Icon from "../../../../components/icon/Icon";
import {Button} from "../../../../components/button/Button";
import {theme} from "../../../../styles/Theme";

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
    flex: 1 1 30%;
    min-height: 225px;
    background-color: #fbfbfb;
    padding: 30px 20px;
`

const Title = styled.h3`
    margin-top: 25px;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.primaryText};
    text-transform: capitalize;
`

const Description = styled.p`
    text-align: center;
    text-transform: capitalize;
    color: ${theme.colors.secondaryText};
    font-weight: 400;
    font-size: 15px;
`