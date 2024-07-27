import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const Menu = () => {
    return (
        <nav>
            <MenuList>
                <FlexWrapper alignItems="center" gap="65px" direction="column">
                    <MenuItem>
                        <a href="#home">
                            <Icon id="home" width="18" height="15"/>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#services">
                            <Icon id="services" width="16.5" height="18"/>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#cv">
                            <Icon id="cv" width="16" height="15"/>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#portfolio">
                            <Icon id="portfolio" width="16" height="16"/>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#blog">
                            <Icon id="blog" width="15" height="15"/>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#contact">
                            <Icon id="contact" width="15" height="15"/>
                        </a>
                    </MenuItem>
                </FlexWrapper>
            </MenuList>
        </nav>
    );
};

const MenuList = styled.ul`
    list-style: none;
`

const MenuItem = styled.li`

    a {
        position: relative;

        svg {
            position: relative;
            z-index: 2;
            fill: ${theme.colors.secondaryText};
        }

        &:before {
            position: absolute;
            content: "";
            display: inline-block;
            background-color: ${theme.colors.primaryBg};
            width: 40px;
            height: 40px;
            border-radius: 20px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }
        
        &:hover {
            &:before {
                background-color: ${theme.colors.accent};
            }
            
            svg {
                fill: ${theme.colors.primaryText};
            }
        }
    }
`

