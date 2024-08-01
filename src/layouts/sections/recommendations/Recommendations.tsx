import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {RecommendationSlider} from "./recommendationSlider/RecommendationSlider";
import {SectionDescription} from "../../../components/SectionDescription";
import jamesPhoto from "../../../assets/images/james.webp";
import tianaPhoto from "../../../assets/images/tiana.webp";
import talanPhoto from "../../../assets/images/talan.webp";

const recommendations = [
    {
        stars: 5,
        title: "Great Quality!",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        photo: jamesPhoto,
        username: "James Gouse",
        usernameDescription: "Graphic Designer"
    },
    {
        stars: 5,
        title: "Amazing work!",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        photo: tianaPhoto,
        username: "Tiana Philips",
        usernameDescription: "Photographer"
    },
    {
        stars: 5,
        title: "Great Quality!",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        photo: talanPhoto,
        username: "Talan Smith",
        usernameDescription: "Front-end Developer"
    }
];

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <SectionTitle>Recommendations</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <RecommendationSlider recommendations={recommendations}/>
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`

`

