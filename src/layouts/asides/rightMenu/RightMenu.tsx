import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Icon from "../../../components/icon/Icon";
import {Menu} from "./menu/Menu";

export const RightMenu = () => {
    return (
        <StyledRightMenu>
            <FlexWrapper alignItems="center" justifyContent="flex-start" direction="column" height="100%">
                <Icon id="contrast" width="25" height="25"/>
                <Menu/>
            </FlexWrapper>
        </StyledRightMenu>
    );
};

const StyledRightMenu = styled.aside`
    width: 108px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #61dafb;
`

