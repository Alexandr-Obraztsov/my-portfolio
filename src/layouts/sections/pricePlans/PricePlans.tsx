import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Description} from "../../../components/Description";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {PricePlan} from "./pricePlan/PricePlan";
import {theme} from "../../../styles/Theme";

const plans = [
    {
        title: "silver",
        price: "0.00",
        description: "For most businesses that want to optimize web queries",
        includes: [true, true, false, false, false, false, false, false]
    },

    {
        title: "gold",
        price: "50.00",
        description: "For most businesses that want to optimize web queries",
        includes: [true, true, true, true, false, false, false, false],
        comment: "Most Popular"
    },

    {
        title: "diamond",
        price: "80.00",
        description: "For most businesses that want to optimize web queries",
        includes: [true, true, true, true, true, true, true, true]
    }
]

export const PricePlans = () => {
    return (
        <StyledPricePlans>
            <SectionTitle>Price Plans</SectionTitle>
            <Description centered>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</Description>
            <FlexWrapper justifyContent="center" gap="20px" >
                {plans.map((plan)=>{
                    return <PricePlan title={plan.title} price={plan.price} description={plan.description} includes={plan.includes} comment={plan.comment}/>
                })}
            </FlexWrapper>
        </StyledPricePlans>
    );
};

const StyledPricePlans = styled.section`
    background-color: ${theme.colors.primaryBg};
`

