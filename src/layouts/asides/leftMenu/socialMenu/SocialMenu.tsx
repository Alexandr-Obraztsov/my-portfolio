import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const SocialMenu = () => {
    return (
        <StyledSocialMenu>
            <FlexWrapper gap="30px">
                <MenuItem><a href="#"><Icon id="facebook" width="6" height="12"/></a></MenuItem>
                <MenuItem><a href="#"><Icon id="instagram" width="14" height="14"/></a></MenuItem>
                <MenuItem><a href="#"><Icon id="twitter" width="12" height="11"/></a></MenuItem>
                <MenuItem><a href="#"><Icon id="linkedin" width="12" height="13"/></a></MenuItem>
                <MenuItem><a href="#"><Icon id="youtube" width="12" height="12"/></a></MenuItem>
                <MenuItem><a href="#"><Icon id="dribble" width="12" height="12"/></a></MenuItem>
            </FlexWrapper>
        </StyledSocialMenu>
    );
};

const StyledSocialMenu = styled.ul`

`

const MenuItem = styled.li`
    a {
        position: relative;
        
        svg {
            position: relative;
        }
        
        &:before {
            content: "";
            display: inline-block;
            width: 24px;
            height: 24px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background-color: ${theme.colors.accent};
        }
    }
`