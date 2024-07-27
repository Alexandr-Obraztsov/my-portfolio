import React from 'react';
import styled from "styled-components";
import {Rating} from "./Rating";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Description} from "../../../../components/Description";

type RecommendationPropsType = {
    stars: number,
    title: string,
    message: string,
    photo: string,
    username: string,
    usernameDescription: string
}

export const Recommendation = (props: RecommendationPropsType) => {
    return (
        <StyledRecommendation>
            <Rating stars={props.stars}/>
            <Title>{props.title}</Title>
            <Description>{props.message}</Description>
            <FlexWrapper gap="25px" alignItems="center" wrap="wrap">
                <Image src={props.photo}/>
                <FlexWrapper direction="column" gap="5px" justifyContent="center">
                    <Username>{props.username}</Username>
                    <Description>{props.usernameDescription}</Description>
                </FlexWrapper>
            </FlexWrapper>
        </StyledRecommendation>
    );
};


const StyledRecommendation = styled.div`
    background-color: #ffffff;
    padding: 25px;
    height: 100%;
`

const Title = styled.h3`
    margin-bottom: 18px;
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.primaryText};
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    object-fit: cover ;
`

const Username = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.primaryText};
`