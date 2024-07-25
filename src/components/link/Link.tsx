import React from 'react';
import styled, {css} from "styled-components";
import Icon from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

type LinkPropsType = {
    href?: string,
    text?: string,
    icon?: {
        id: string,
        width: string,
        height: string
    },
    padding?: string;
    clear?: boolean
}

export const Link = (props: LinkPropsType) => {
    return (
        <StyledButton href={props.href || "#"} padding={props.padding} clear={props.clear}>
            <FlexWrapper justifyContent="center" alignItems="center" gap="10px">
                {props.text}
                {props.icon && <Icon id={props.icon.id} width={props.icon.width} height={props.icon.height}/>}
            </FlexWrapper>
        </StyledButton>
    );
};

type StyledLinkPropsType = {
    padding?: string,
    clear?: boolean
}

const StyledButton = styled.a<StyledLinkPropsType>`
    display: inline-block;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    color: black;
    padding: ${props => props.padding || "16px 32px"};
    background-color: ${theme.colors.accent};
    border-radius: 5px;

    ${props => props.clear && css`
        font-size: 18px;
        background-color: transparent;
        color: ${theme.colors.accent};
        padding: 0;
    `}
`

