import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";

type ProjectPropsType = {
    href?: string,
    imgSrc: string,
    alt?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject href={props.href || "#"}>
            <Image src={props.imgSrc} alt={props.alt || "Здесь находится проект"}/>
            <IconWrapper>
                <Icon id="plus" width="32" height="32"/>
            </IconWrapper>
        </StyledProject>
    );
};
const IconWrapper = styled.div``

const StyledProject = styled.a`
    width: calc((100% - 40px)/3);
    height: 300px;
    position: relative;
    
    ${IconWrapper} {
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }
    
    &:hover {
        &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${theme.colors.accent};
            opacity: 95%;
        }
        
        ${IconWrapper} {
            opacity: 1;
        }
    }
`


const Image = styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%;
`

