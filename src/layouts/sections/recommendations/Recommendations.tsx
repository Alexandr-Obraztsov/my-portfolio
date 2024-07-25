import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Description} from "../../../components/Description";
import {Slider} from "../pricePlans/pricePlan/Slider";

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <SectionTitle>Recommendations</SectionTitle>
            <Description centered>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</Description>
                <Slider />
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`

`

