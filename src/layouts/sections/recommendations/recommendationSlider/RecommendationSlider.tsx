import React from 'react';
import styled from "styled-components";
import {Recommendation, RecommendationPropsType} from "../recommendation/Recommendation";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

export const RecommendationSlider = (props: {recommendations: Array<RecommendationPropsType>}) => {
    return (
        <StyledSlider>
            <FlexWrapper gap="20px" justifyContent="center">
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
const Slide = styled.li`
    width: 310px;
    flex-grow: 1;
`

const StyledSlider = styled.ul`
    
    padding: 20px 0;
    ${theme.media.notDesktop} {
        ${Slide}:nth-child(3) {
            display: none;
        }
    }

    ${theme.media.mobile} {
        ${Slide}:nth-child(2) {
            display: none;
        }
    }
`