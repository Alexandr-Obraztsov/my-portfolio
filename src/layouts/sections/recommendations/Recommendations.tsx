import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Recommendation} from "./recommendation/Recommendation";
import jamesPhoto from "../../../assets/images/james.webp";
import tianaPhoto from "../../../assets/images/tiana.webp"
import talanPhoto from "../../../assets/images/talan.webp"
import {Slider} from "../pricePlans/pricePlan/Slider";

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <SectionTitle>Recommendations</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <Slider />
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`
    background-color: #e0e0fb;
`

