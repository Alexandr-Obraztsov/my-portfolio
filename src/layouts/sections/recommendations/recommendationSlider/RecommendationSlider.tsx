import React from 'react';
import styled from "styled-components";
import {Recommendation, RecommendationPropsType} from "../recommendation/Recommendation";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

export const RecommendationSlider = (props: {recommendations: Array<RecommendationPropsType>}) => {
    return (
        <StyledSlider>
            <FlexWrapper gap="20px" justifyContent="flex-start" wrap="nowrap">
                {props.recommendations.map((recommendation, index) => <Slide><Recommendation key={index} {...recommendation}/></Slide>)}

            </FlexWrapper>

            <Pagination>
                <PaginationItem></PaginationItem>
                <PaginationItem></PaginationItem>
                <PaginationItem></PaginationItem>
            </Pagination>
        </StyledSlider>
    );
};

const Pagination = styled.span`
    display: flex;
    justify-content: center;
    gap: 10px;
`

const PaginationItem = styled.a`
    display: inline-block;
    background-color: ${theme.colors.accent};
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-top: 50px;
    transition: 0.3s;

    &:hover {
        background-color: #fd5e5e;
        width: 20px;
    }
`

const StyledSlider = styled.ul`
    
    ${FlexWrapper} {
        overflow-y: auto;
    }
`

const Slide = styled.li`
    max-width: calc((100% - 40px) / 3);
    width: 100%;
    flex-shrink: 0;
`