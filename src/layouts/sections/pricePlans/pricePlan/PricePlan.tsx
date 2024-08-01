import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {Description} from "../../../../components/Description";

type PricePlanPropsType = {
    comment?: string,
    title: string,
    price: string,
    description: string,
    includes: Array<boolean>
}

const services = ["UI Design", "web development", "logo design", "seo optimization", "wordPress integration", "5 Websites", "unlimited user", "20 gB bandwith"]

export const PricePlan = (props: PricePlanPropsType) => {
    return (
        <StyledPricePlan>
            {props.comment && <Comment>{props.comment}</Comment>}
            <FlexWrapper direction="column" alignItems="center">
                <Title>{props.title}</Title>
                <Price>
                    <FlexWrapper gap="10px" alignItems="flex-end" justifyContent="center">
                        ${props.price}
                        <span>/Hour</span>
                    </FlexWrapper>
                </Price>

                <Description margin="0 0 21px" centered>{props.description}</Description>
                <ServiceList>
                    {props.includes.map((value, index) => {
                        return <ServiceItem>
                            <FlexWrapper alignItems="center">
                                <Icon id={value ? "check" : "close"} width="24" height="24"/>
                                <ServiceText>{services[index]}</ServiceText>
                            </FlexWrapper>
                        </ServiceItem>
                    })}
                </ServiceList>
                <RoundLink>Order now</RoundLink>
            </FlexWrapper>
        </StyledPricePlan>
    );
};

const StyledPricePlan = styled.article`
    background-color: #fdfdfd;
    flex: 1 1 auto;
    min-width: 310px;
    padding: 54px 30px 25px;
    position: relative;
`

const Title = styled.h3`
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 24px;
    text-transform: capitalize;
`

const Price = styled.span`
    font-size: 32px;
    font-weight: 700;
    display: block;
    line-height: 40px;
    margin-bottom: 8px;
    
    span {
        font-weight: 400;
        font-size: 15px;
        line-height: 30px;
    }
`

const ServiceList = styled.ul`
    margin-bottom: 21px;
    width: 100%;
`

const ServiceItem = styled.li`
    & + & {
        margin-top: 16px;
    }
`

const ServiceText = styled.span`
    display: inline-block;
    margin-left: 15px;
    text-transform: capitalize;
`

const Comment = styled.span`
 position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: ${theme.colors.accent};
    height: 30px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
`
const RoundLink = styled.a`
    display: inline-block;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    color: black;
    padding: 10px 40px;
    background-color: ${theme.colors.accent};
    border-radius: 30px;
    background-color: ${theme.colors.secondaryBg};
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.14);

    &:hover {
        background-color: ${theme.colors.accent};
    }
`