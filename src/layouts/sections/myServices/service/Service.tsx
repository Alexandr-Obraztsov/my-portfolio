import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import Icon from "../../../../components/icon/Icon";
import {Link} from "../../../../components/link/Link";
import {theme} from "../../../../styles/Theme";
import {Description} from "../../../../components/Description";

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
                {props.icon && <ImageWrapper><Icon id={props.icon.id} width={props.icon.width} height={props.icon.height}/></ImageWrapper>}
                <Title>{props.title}</Title>
                <Description margin="0 0 20px" centered>{props.descripion}</Description>
                {props.link && <Link text="Order now" icon={{id: "little-arrow", width: "6", height: "8"}} href={props.link} clear/>}
            </FlexWrapper>
        </StyledService>
    );
};

const ImageWrapper = styled.div`
    margin-bottom: 25px;
    
    
`

const StyledService = styled.div`
    flex: 1 1 30%;
    min-height: 225px;
    background-color: #fbfbfb;
    padding: 30px 20px;
`

const Title = styled.h3`
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.primaryText};
    text-transform: capitalize;
`