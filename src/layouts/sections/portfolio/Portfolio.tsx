import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {FlexWrapper} from "../../../components/FlexWrapper";
import proj1 from "../../../assets/images/proj-1.webp";
import proj2 from "../../../assets/images/proj-2.webp";
import proj3 from "../../../assets/images/proj-3.webp";
import proj4 from "../../../assets/images/proj-4.webp";
import proj5 from "../../../assets/images/proj-5.webp";
import proj6 from "../../../assets/images/proj-6.webp";
import {Project} from "./project/Project";
const menuItemNames = ["All categories", "UI Design", "Web Templates", "Logo", "Branding"]

export const Portfolio = () => {
    return (
        <StyledPorfolio>
            <SectionTitle>Portfolio</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <Menu>
                <FlexWrapper gap="10px" justifyContent="center">
                    {menuItemNames.map((name) => {
                        return <MenuItem>
                            <MenuItemLink href="#">{name}</MenuItemLink>
                        </MenuItem>
                    })}
                </FlexWrapper>
            </Menu>
            <FlexWrapper wrap="wrap" justifyContent="center" gap="10px">
                <Project imgSrc={proj1}/>
                <Project imgSrc={proj2}/>
                <Project imgSrc={proj3}/>
                <Project imgSrc={proj4}/>
                <Project imgSrc={proj5}/>
                <Project imgSrc={proj6}/>
            </FlexWrapper>
        </StyledPorfolio>
    );
};

const StyledPorfolio = styled.section`
    background-color: #dff0bd;
`

const Menu = styled.ul`
    list-style: none;
`

const MenuItem = styled.li`

`

const MenuItemLink = styled.a`
    text-decoration: none;
`