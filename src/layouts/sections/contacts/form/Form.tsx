import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

import React from 'react';
import {Link} from "../../../../components/link/Link";

export const Form = () => {
    return (
        <StyledForm>
            <Label>
                Your Full Name ( Required)
                <Field type="text" name="name" required/>
            </Label>
            <Label>
                Your Email ( Required)
                <Field type="email" name="email" required/>
            </Label>
            <Label>
                Subject
                <Field type="text" name="subject"/>
            </Label>
            <Label>
                Your Message
                <Field as="textarea" name="message"/>
            </Label>
            <Link padding="9px 24px" text="Send Message" borderRadius="0"/>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    background-color: ${theme.colors.secondaryBg};
    height: 100%;
    padding: 25px;
    grid-area: 2 / 1 / span 3 / 1;

    textarea {
        height: 210px;
        resize: none;
    }

    a {
        margin-top: 25px;
        text-transform: uppercase;
        font-size: 14px;
    }
`
const Field = styled.input`
    width: 100%;
    display: inline-block;
    outline: none;
    margin-top: 10px;
    height: 50px;
    background-color: ${theme.colors.primaryBg};
    border: none;
    font-weight: 500;
    font-size: 18px;
    font-family: Inter, sans-serif;
    padding: 10px;
    color: ${theme.colors.primaryText};
`
const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.secondaryText};

    & + & {
        margin-top: 25px;
    }
`