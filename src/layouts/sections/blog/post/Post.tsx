import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/link/Link";

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
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Link text="Learn More" href={props.link || "#"} icon={{id: "little-arrow", width: "6", height: "8"}} clear/>
        </StyledPost>
    );
};

const StyledPost = styled.div`
    max-width: 310px;
    width: 100%;
    background-color: #fdfdfd;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    height: 300px;
`

const Title = styled.h3`
`

const Description = styled.p``