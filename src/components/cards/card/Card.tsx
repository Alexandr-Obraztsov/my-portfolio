import React from 'react';
import {CardPropsType} from "../CardPropsType";
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {Description} from "../../Description";
import {theme} from "../../../styles/Theme";

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <FlexWrapper justifyContent="space-between" gap="40px" alignItems="flex-start">
                <div>
                    <Title>{props.title1}</Title>
                    <FlexWrapper gap="21px">
                        <Rank>{props.description1}</Rank>
                        <Date>{props.date}</Date>
                    </FlexWrapper>
                </div>
                <div>
                    <Title>{props.title2}</Title>
                    <StyledDescription>{props.description2}</StyledDescription>
                </div>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledDescription = styled(Description)`
    text-align: justify;
`

const StyledCard = styled.div`
    padding: 47px 30px 11px;
    position: relative;

    & + & {
        &:before {
            content: "";
            width: calc(100% - 94px);
            height: 2px;
            background-color: ${theme.colors.primaryBg};
            display: inline-block;
            top: -11px;
            position: absolute;

        }
    }

    ${FlexWrapper} div:first-child {
        flex-shrink: 0;
    }
    
    ${FlexWrapper} div:last-child {
        max-width: 700px;
    }
    
    ${theme.media.mobile} {
        & > ${FlexWrapper}{
            flex-direction: column;
        }
    }
`

const Title = styled.h3`
    margin-bottom: 28px;
    font-weight: 500;
    font-size: 18px;
    
    ${theme.media.mobile} {
        margin-bottom: 14px;
    }
`

const Date = styled.span`
    font-size: 10px;
    font-weight: 400;
    color: ${theme.colors.secondaryBg};
    display: inline-block;
    padding: 4px 7px;
    background-color: ${theme.colors.accent};
`

const Rank = styled.span`

`