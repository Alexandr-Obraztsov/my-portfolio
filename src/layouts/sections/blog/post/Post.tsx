import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/link/Link";
import {Description} from "../../../../components/Description";

type PostPropsType = {
    src: string,
    title: string,
    description: string,
    link?: string
}

export const Post = (props : PostPropsType) => {
    return (
        <StyledPost>
            <Image src={props.src}/>
            <Content>
                <Title>{props.title}</Title>
                <Description margin="0 0 8px 0">{props.description}</Description>
                <Link text="Learn More" href={props.link || "#"} icon={{id: "little-arrow", width: "6", height: "8"}} clear/>
            </Content>
        </StyledPost>
    );
};

const StyledPost = styled.article`
    max-width: 310px;
    width: 100%;
    background-color: #fdfdfd;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    height: 300px;
    margin-bottom: 25px;
`

const Title = styled.h3`
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
`

const Content = styled.div`
    margin: 0 25px 16px 25px;
`

