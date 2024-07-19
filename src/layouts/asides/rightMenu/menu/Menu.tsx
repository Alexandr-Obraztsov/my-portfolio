import React from 'react';
import Icon from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";

export const Menu = () => {
    return (
        <nav>
            <MenuList>
                <FlexWrapper alignItems="center" gap="20px" direction="column"></FlexWrapper>
                <li>
                    <a href="#">
                        <Icon id="home" width="18" height="18"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon id="services" width="18" height="18"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon id="cv" width="18" height="18"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon id="portfolio" width="18" height="18"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon id="blog" width="15" height="15"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon id="contact" width="15" height="15" />
                    </a>
                </li>
            </MenuList>
        </nav>
    );
};

const MenuList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

