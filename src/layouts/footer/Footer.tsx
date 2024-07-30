import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justifyContent="center" alignItems="center" gap="15px" height="100%">
                <Icon id="copyright" width="20" height="20"/>
                <Copyright>2021 All Rights Reserved.Ojjomedia</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    height: 60px;
`

const Copyright = styled.small`
    font-size: 15px;
    font-weight: 400;
`