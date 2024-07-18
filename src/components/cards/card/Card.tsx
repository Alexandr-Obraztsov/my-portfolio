import React from 'react';
import {CardPropsType} from "../CardPropsType";
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <FlexWrapper>
                <div>
                    <Title>{props.title1}</Title>
                    <Description1>{props.description1}</Description1>
                    <Date>{props.date}</Date>
                </div>
                <div>
                    <Title>{props.title2}</Title>
                    <Description2>{props.description2}</Description2>
                </div>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    ${FlexWrapper} > div:first-child {
        width: 80%;
    }
`

const Title = styled.h3`
    
`

const Description1 = styled.span`
    
`

const Description2 = styled.p`
    
`

const Date = styled.span`
    
`