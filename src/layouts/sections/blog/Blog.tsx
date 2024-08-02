import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Post} from "./post/Post";
import proj1 from "../../../assets/images/proj-1.webp";
import proj2 from "../../../assets/images/proj-2.webp";
import proj3 from "../../../assets/images/proj-3.webp";
import {SectionDescription} from "../../../components/SectionDescription";

const posts = [
    {
        src: proj1,
        title: "How to make web tempates",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi done orem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi done"
    },
    {
        src: proj2,
        title: "make Business card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi done orem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi done"
    },
    {
        src: proj3,
        title: "How to make Flyer Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi done orem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi done"
    }
]

export const Blog = () => {
    return (
        <StyledBlog id="blog">
            <SectionTitle>Blog</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <FlexWrapper gap="10px" justifyContent="flex-start">
                {posts.map(post => <Post {...post}/>)}
            </FlexWrapper>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    ${FlexWrapper}{
        overflow-y: auto;
    }
`

