import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "react-scroll";

const menuItems = [
    {
        description: "Home",
        href: "home",
        icon: {
            id: "home",
            width: "18",
            height: "15"
        }
    },
    {
        description: "Code",
        href: "services",
        icon: {
            id: "services",
            width: "18.5",
            height: "18"
        }
    },
    {
        description: "Resume",
        href: "cv",
        icon: {
            id: "cv",
            width: "16",
            height: "15"
        }
    },
    {
        description: "Portfolio",
        href: "portfolio",
        icon: {
            id: "portfolio",
            width: "16",
            height: "16"
        }
    },
    {
        description: "Blog",
        href: "#blog",
        icon: {
            id: "blog",
            width: "15",
            height: "15"
        }
    },
    {
        description: "Contacts",
        href: "contacts",
        icon: {
            id: "contact",
            width: "15",
            height: "15"
        }
    }
]


export const Menu = () => {
    return (
        <StyledMenu>
            <MenuList>
                <FlexWrapper alignItems="center" gap="65px" direction="column">
                    {menuItems.map((item, index) => (
                        <MenuItem key={index}>
                            <ItemDescription>{item.description}</ItemDescription>
                            <Link className="active" to={item.href} smooth={true}>
                                <Icon id={item.icon.id} width={item.icon.width} height={item.icon.height}/>
                            </Link>
                        </MenuItem>
                    ))}
                </FlexWrapper>
            </MenuList>
        </StyledMenu>
    );
};

const MenuList = styled.ul`
    
    ${theme.media.tablet} {
        ${FlexWrapper} {
            flex-direction: row;
            align-items: center;
            width: 100%;
            justify-content: space-around;
            gap: unset;
        }
    }
`

const ItemDescription = styled.span`
    position: absolute;
    font-size: 12px;
    font-weight: 500;
    border-radius: 2px;
    left: 50%;
    top: -42px;
    transform: translateX(-50%);
    
    display: none;
    background-color: ${theme.colors.primaryText};
    color: white;
    
    padding: 6px 15px 3px;
    
    &::after {
        position: absolute;
        content: "";
        display: inline-block;
        width: 18px;
        height: 14px;
        background-color: ${theme.colors.primaryText};
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        clip-path: polygon(0 20%, 100% 20%, 50% 100%);
    }
`

const MenuItem = styled.li`
    position: relative;
    
    &:hover {
        a:before {
            background-color: ${theme.colors.accent};
        }
    
        ${ItemDescription} {
            display: block;
        }

        svg {
            fill: ${theme.colors.primaryText};
        }
    }
    
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
    }
`


const StyledMenu = styled.nav`
    max-width: 420px;
    width: 100%;
`