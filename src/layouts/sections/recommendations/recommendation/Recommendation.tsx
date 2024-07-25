import React from 'react';
import styled from "styled-components";
import {Rating} from "./Rating";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

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
            <Message>{props.message}</Message>
            <FlexWrapper gap="25px" alignItems="center">
                <Image src={props.photo}/>
                <FlexWrapper direction="column" gap="5px" justifyContent="center">
                    <Username>{props.username}</Username>
                    <UsernameDescription>{props.usernameDescription}</UsernameDescription>
                </FlexWrapper>
            </FlexWrapper>
        </StyledRecommendation>
    );
};

const StyledRecommendation = styled.div`
    background-color: #ffffff;    
    max-width: 310px;
    width: 100%;
    padding: 25px;
`

const Title = styled.h3`
    margin-bottom: 18px;
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.primaryText};
`

const Message = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: ${theme.colors.secondaryText};
    margin-bottom: 30px;
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

const UsernameDescription = styled.span`
    font-size: 15px;
    font-weight: 400;
    color: ${theme.colors.secondaryText};
`