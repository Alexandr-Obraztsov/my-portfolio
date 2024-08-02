import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {ContactCard} from "../../../components/contactCard/ContactCard";
import {Form} from "./form/Form";
import {theme} from "../../../styles/Theme";

const cardsData = [
    {
        icon: {
            id: "location",
            width: "18",
            height: "18"
        },

        area: "c1",
        titles: ["Country:", 'City:', "Streat:"],
        texts: ["Bangladesh", "Dhaka", "35 vhatara, Badda"]
    },
    {
        icon: {
            id: "mail",
            width: "18",
            height: "18"
        },

        area: "c2",
        titles: ["Email:", "Skype:", "Telegram:"],
        texts: ["youremail@gmail.com", "@yourusername", "@yourusername"]
    },
    {
        icon: {
            id: "mobile",
            width: "18",
            height: "18"
        },

        area: "c3",
        titles: ["Support services:", "Office:", "Personal:"],
        texts: ["15369","+58 (021)356 587 235","+58 (021)356 587 235"]
    }
]

export const Contacts = () => {
    return (
        <Grid id="contact">
            <SectionTitle left>Leave Us Your Info</SectionTitle>
            <SectionTitle left>Contact Information</SectionTitle>
            {cardsData.map((obj, index) => {
                return <ContactCard area={obj.area} icon={obj.icon} titles={obj.titles} texts={obj.texts} key={index}/>
            })}
            <Form/>
        </Grid>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: 60fr 40fr;
    grid-template-areas: 
        "h1 h2"
        "f c1"
        "f c2"
        "f c3";
    grid-gap: 20px 30px;

    ${SectionTitle}:first-child {
        grid-area: h1;
        margin-top: 70px;
        margin-bottom: 30px;
    }

    ${SectionTitle}:last-child {
        margin-bottom: 50px;
        grid-area: h2;
    }

    ${theme.media.tablet} {
        grid-template-columns: 1fr;
        grid-template-areas:
            "h2"
            "c1"
            "c2"
            "c3"
            "h1"
            "f"
            "f"
            "f";
    }
`


