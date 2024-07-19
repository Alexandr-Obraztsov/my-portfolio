import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import Icon from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justifyContent="center" gap="5px">
                <Icon id="copyright" width="20" height="20"/>
                <Copyright>2021 All Rights Reserved.Ojjomedia</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: #deeebc;
`

const Copyright = styled.small``