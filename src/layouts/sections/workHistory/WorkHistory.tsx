import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Cards} from "../../../components/cards/Cards";
import {SectionDescription} from "../../../components/SectionDescription";

const cards = [
    {
        title1: "Lead Web Designer",
        title2: "Certificate of web training",
        description1: "Student",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        date: "Jan 1016 - Dec 2021"
    },
    {
        title1: "Junior Web Designer",
        title2: "Certificate of web training",
        description1: "Student",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        date: "Jan 1016 - Dec 2021"
    },
    {
        title1: "Senior Web Designer",
        title2: "Certificate of web training",
        description1: "Student",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        date: "Jan 1016 - Dec 2021"
    },
]

export const WorkHistory = () => {
    return (
        <StyledEducation>
            <SectionTitle>Work History</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <Cards cards={cards}/>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`
`
