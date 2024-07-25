import React from 'react';
import styled from "styled-components";
import {Recommendation} from "../../recommendations/recommendation/Recommendation";
import jamesPhoto from "../../../../assets/images/james.webp";
import tianaPhoto from "../../../../assets/images/tiana.webp";
import talanPhoto from "../../../../assets/images/talan.webp";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper gap="20px" justifyContent="center">
                <Slide>
                    <Recommendation stars={5} title="Great Quality!"
                                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
                                    photo={jamesPhoto} username="James Gouse" usernameDescription="Graphic Designer"/>
                </Slide>
                <Slide>
                    <Recommendation stars={5} title="Amazing work!"
                                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
                                    photo={tianaPhoto} username="Tiana Philips" usernameDescription="Photographer"/>
                </Slide>
                <Slide>
                    <Recommendation stars={5} title="Great Quality!"
                                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
                                    photo={talanPhoto} username="Talan Westervelt" usernameDescription="Business man"/>
                </Slide>
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

const PaginationItem = styled.span`
    display: inline-block;
    background-color: ${theme.colors.accent};
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-top: 50px;
`

const StyledSlider = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

const Slide = styled.li``