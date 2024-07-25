import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Service} from "./service/Service";
import {SectionDescription} from "../../../components/SectionDescription";
import {theme} from "../../../styles/Theme";

export const MyServices = () => {
    return (
        <StyledMyServices>
            <SectionTitle>My Services</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <FlexWrapper direction="column" alignItems="center">
                <FlexWrapper gap="20px" wrap="wrap">
                    <Service icon={{id: "coding", width: "68", height: "68"}} title="web development"
                             descripion="blog, e-commerce"/>
                    <Service icon={{id: "illustration", width: "68", height: "68"}} title="uI/uX design"
                             descripion="Mobile app, website design"/>
                    <Service icon={{id: "microphone", width: "74", height: "74"}} title="sound design"
                             descripion="Voice Over, Beat Making"/>
                    <Service icon={{id: "game-development", width: "74", height: "74"}} title="game design"
                             descripion="Character Design, Props & Objects"/>
                    <Service icon={{id: "photographer", width: "74", height: "74"}} title="photography"
                             descripion="portrait, product photography"/>
                    <Service title="advertising"
                             descripion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. "
                             link="#"/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledMyServices>
    );
};

const StyledMyServices = styled.section`
    background-color: ${theme.colors.primaryBg};
`



