import React from 'react';
import styled from "styled-components";
import {Rating} from "./Rating";

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
            <Image src={props.photo}/>
            <Username>{props.username}</Username>
            <UsernameDescription>{props.usernameDescription}</UsernameDescription>
        </StyledRecommendation>
    );
};

const StyledRecommendation = styled.div`
    background-color: #ffffff;    
    max-width: 310px;
    width: 100%;
`

const Title = styled.h3`
    
`

const Message = styled.p``

const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    object-fit: cover ;
`

const Username = styled.span``

const UsernameDescription = styled.span``