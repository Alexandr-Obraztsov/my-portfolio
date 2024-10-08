import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

type ContactCardPropsType = {
    icon: {
        id: string,
        width: string,
        height: string
    },

    area: string,
    titles: Array<string>,
    texts: Array<string>
}

export const ContactCard = (props: ContactCardPropsType) => {
    return (
        <StyledContactCard area={props.area}>
            <IconWrapper>
                <Icon id={props.icon.id} width={props.icon.width} height={props.icon.height}/>
            </IconWrapper>
            <address>
            {props.titles.map((title, index) =>
                <FlexWrapper justifyContent="space-between" wrap="wrap" key={index}>
                    <Text>{title}</Text>
                    <Description>{props.texts[index]}</Description>
                </FlexWrapper>
            )}
            </address>
        </StyledContactCard>
    );
};


const StyledContactCard = styled.article<{area: string}>`
    grid-area: ${props => props.area};
    background-color: ${theme.colors.secondaryBg};
    padding: 25px;
    
    ${FlexWrapper} + ${FlexWrapper}{
        margin-top: 16px;
    }
    
    address {
        font-style: normal;
    }
`

const Text = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.secondaryText};
`

const Description = styled.span`
    font-weight: 400;
    font-size: 15px;
    color: ${theme.colors.secondaryText};
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 42px;
    position: relative;
    
    svg {
        position: relative;
    }
    
    &:before {
        content: "";
        display: inline-block;
        width: 40px;
        height: 40px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: ${theme.colors.accent};
        border-radius: 50%;
        position: absolute;
    }
`