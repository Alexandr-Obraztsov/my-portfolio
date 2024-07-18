import React from 'react';
import styled from "styled-components";
import Icon from "../../../../components/icon/Icon";
import {Service} from "../../myServices/service/Service";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Button} from "../../../../components/button/Button";

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
            <Title>{props.title}</Title>
            <Price>${props.price}/Hour</Price>
            <Description></Description>
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
            <Button text="Order now" />
        </StyledPricePlan>
    );
};

const StyledPricePlan = styled.div`
    background-color: #fdfdfd;
    width: 100%;
`

const Title = styled.h3``

const Price = styled.span``

const Description = styled.p``

const ServiceList = styled.ul``

const ServiceItem = styled.li``

const ServiceText = styled.span``

