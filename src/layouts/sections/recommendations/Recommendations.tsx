import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../pricePlans/pricePlan/Slider";
import {SectionDescription} from "../../../components/SectionDescription";

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

`

