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
                <Icon id="contrast" width="30" height="30"/>
            </IconWrapper>
            <FlexWrapper alignItems="center" justifyContent="center" gap="120px" direction="column" height="100%">
                <Menu/>
            </FlexWrapper>
        </StyledRightMenu>
    );
};

const StyledRightMenu = styled.aside`
    height: 100vh;
    width: 108px;
    background-color: ${theme.colors.secondaryBg};
    padding: 50px 10px 80px 10px;
    flex-shrink: 0;
`

const IconWrapper = styled.div`
    text-align: center;
`