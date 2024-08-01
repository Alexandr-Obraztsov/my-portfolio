import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Menu} from "./menu/Menu";
import {theme} from "../../../styles/Theme";

export const RightMenu = () => {
    return (
        <StyledRightMenu>
            <IconWrapper>
                <Icon id="contrast" width="25" height="25"/>
            </IconWrapper>
            <FlexWrapper alignItems="center" justifyContent="center" height="100%">
                <Menu/>
            </FlexWrapper>
        </StyledRightMenu>
    );
};


const IconWrapper = styled.div`
    text-align: center;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    height: 25px;
    
    ${theme.media.tablet} {
        display: none;
    }
`

const StyledRightMenu = styled.aside`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 108px;
    background-color: ${theme.colors.secondaryBg};

    ${theme.media.tablet} {
        top: calc(100vh - 70px);
        left: 0;
        width: 100%;
        height: 70px;
        box-shadow: 0 0 20px 0 rgba(74, 74, 74, 0.25);
    }
`