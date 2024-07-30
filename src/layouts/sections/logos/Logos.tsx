import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Logos = () => {
    return (
        <StyledLogos>
            <FlexWrapper justifyContent="space-evenly">
                <Icon id="logo1" width="128" height="90"/>
                <Icon id="logo2" width="140" height="140"/>
                <Icon id="logo3" width="140" height="140"/>
                <Icon id="logo4" width="140" height="140"/>
            </FlexWrapper>
        </StyledLogos>
    );
};

const StyledLogos = styled.section`
`
