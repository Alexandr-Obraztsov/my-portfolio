import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {ContactCard} from "../../../components/contactCard/ContactCard";
import {Form} from "./form/Form";

const cardsData = [
    {
        icon: {
            id: "location",
            width: "18",
            height: "18"
        },
        titles: ["Country:", 'City:', "Streat:"],
        texts: ["Bangladesh", "Dhaka", "35 vhatara, Badda"]
    },
    {
        icon: {
            id: "mail",
            width: "18",
            height: "18"
        },
        titles: ["Email:", "Skype:", "Telegram:"],
        texts: ["youremail@gmail.com", "@yourusername", "@yourusername"]
    },
    {
        icon: {
            id: "mobile",
            width: "18",
            height: "18"
        },
        titles: ["Support services:", "Office:", "Personal:"],
        texts: ["15369","+58 (021)356 587 235","+58 (021)356 587 235"]
    }
]

export const Contacts = () => {
    return (
        <Grid id="contact">
            <SectionTitle left>Leave Us Your Info</SectionTitle>
            <SectionTitle left>Contact Information</SectionTitle>
            {cardsData.map(obj => {
                return <ContactCard icon={obj.icon} titles={obj.titles} texts={obj.texts}/>
            })}
            <Form/>
        </Grid>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: 60fr 40fr;
    grid-gap: 20px 30px;
`


