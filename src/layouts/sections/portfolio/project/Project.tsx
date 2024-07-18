import React from 'react';
import styled from "styled-components";

type ProjectPropsType = {
    href?: string,
    imgSrc: string,
    alt?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledPorject href={props.href || "#"}>
            <Image src={props.imgSrc} alt={props.alt || "Здесь находится проект"}/>
        </StyledPorject>
    );
};

const StyledPorject = styled.a`
    width: 310px;
    height: 300px;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%;
`

