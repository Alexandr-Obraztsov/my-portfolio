import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {CardPropsType} from "./CardPropsType";
import {Card} from "./card/Card";
import {theme} from "../../styles/Theme";


export const Cards = (props: {cards: Array<CardPropsType>}) => {
    return (
        <StyledCards>
            <FlexWrapper direction="column">
                {props.cards.map((cardProps, index)=>{
                    return <Card key={index}
                        title1={cardProps.title1}
                        title2={cardProps.title2}
                        description1={cardProps.description1}
                        description2={cardProps.description2}
                        date={cardProps.date}
                    />
                })}
            </FlexWrapper>
        </StyledCards>
    );
};

const StyledCards = styled.div`
    background-color: ${theme.colors.secondaryBg};
`