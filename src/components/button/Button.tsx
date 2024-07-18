import React from 'react';
import styled from "styled-components";
import Icon from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";

type ButtonPropsType = {
    href?: string,
    text?: string,
    icon?: {
        id: string,
        width: string,
        height: string
    },
    width?: string,
    height?: string,
    borderRadius?: string,
    shadow?: string,

}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton href={props.href || "#"}>
            <FlexWrapper justifyContent="center" alignItems="center" gap="10px">
                {props.text}
                {props.icon && <Icon id={props.icon.id} width={props.icon.width} height={props.icon.height}/>}
            </FlexWrapper>
        </StyledButton>
    );
};

const StyledButton = styled.a<ButtonPropsType>`
    text-decoration: none;
    display: inline-block;
    border: 1px solid black;
    border-radius: ${props => props.borderRadius || "0"};
    padding: 5px;
`


