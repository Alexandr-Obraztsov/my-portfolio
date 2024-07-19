import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ContactCard} from "./contactCard/ContactCard";

export const ContactInformation = () => {
    return (
        <StyledContactInformation>
            <SectionTitle>Contact Information</SectionTitle>
            <FlexWrapper direction="column" gap="10px" alignItems="stretch">
                <ContactCard icon={{id: "location", width: "15", height: "15"}}
                             titles={["Country:", 'City:', "Streat:"]}
                             texts={["Bangladesh", "Dhaka", "35 vhatara, Badda"]}/>
                <ContactCard icon={{id: "mail", width: "15", height: "15"}}
                             titles={["Email:", "Skype:", "Telegram:"]}
                             texts={["youremail@gmail.com", "@yourusername", "@yourusername"]}/>
                <ContactCard icon={{id: "mobile", width: "18", height: "18"}}
                             titles={["Support services:", "Office:", "Personal:"]}
                             texts={["15369","+58 (021)356 587 235","+58 (021)356 587 235"]}/>
            </FlexWrapper>
        </StyledContactInformation>
    );
};

const StyledContactInformation = styled.section`
    flex: 1 1 80%;
    background-color: #dfdff9;
`