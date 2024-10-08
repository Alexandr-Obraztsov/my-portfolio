import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import proj1 from "../../../assets/images/proj-1.webp";
import proj2 from "../../../assets/images/proj-2.webp";
import proj3 from "../../../assets/images/proj-3.webp";
import proj4 from "../../../assets/images/proj-4.webp";
import proj5 from "../../../assets/images/proj-5.webp";
import proj6 from "../../../assets/images/proj-6.webp";
import {Project} from "./project/Project";
import {theme} from "../../../styles/Theme";
import {SectionDescription} from "../../../components/SectionDescription";


const menuItemNames = ["All categories", "UI Design", "Web Templates", "Logo", "Branding"];



export const Portfolio = () => {
    return (
        <StyledPorfolio id="portfolio">
            <SectionTitle>Portfolio</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <Menu>
                <FlexWrapper gap="37px" justifyContent="flex-start">
                    {menuItemNames.map((name) => {
                        return <MenuItem>
                            <a href="#">{name}</a>
                        </MenuItem>
                    })}
                </FlexWrapper>
            </Menu>
            <FlexWrapper wrap="wrap" justifyContent="center" gap="20px">
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
`

const Menu = styled.ul`
    list-style: none;
    margin-bottom: 50px;
    overflow-y: auto;
    
    ${FlexWrapper} {
        margin: 0 auto;
        width: min-content;
    }
`

const MenuItem = styled.li`
    a {
        white-space: nowrap;
      color: ${theme.colors.primaryText};
        font-weight: 500;
        font-size: 18px;
        
        &:hover {
            color: ${theme.colors.accent};
        }
    }
`