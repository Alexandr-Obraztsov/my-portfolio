import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Description} from "../../../components/Description";
import {Cards} from "../../../components/cards/Cards";

const cards = [
    {
        title1: "University of Toronto",
        title2: "Certificate of web training",
        description1: "Student",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        date: "Jan 1016 - Dec 2021"
    },
    {
        title1: "Programming Course",
        title2: "Certificate of web training",
        description1: "Student",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        date: "Jan 1016 - Dec 2021"
    },
    {
        title1: "Web developer courses",
        title2: "Certificate of web training",
        description1: "Student",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        date: "Jan 1016 - Dec 2021"
    },
]

export const Education = () => {
    return (
        <StyledEducation>
            <SectionTitle>Education</SectionTitle>
            <Description centered>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</Description>
            <Cards cards={cards}/>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`
    background-color: #e0f2be;
`
