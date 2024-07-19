import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/button/Button";

export const LeaveUsYourInfo = () => {
    return (
        <StyledLeaveUsYourInfo>
            <SectionTitle>Leave Us Your Info</SectionTitle>
            <Form>
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
                <Button as="button" type="submit" text="Send Message"/>
            </Form>
        </StyledLeaveUsYourInfo>
    );
};

const StyledLeaveUsYourInfo = styled.section`
    background-color: #deeebc;
`

const Form = styled.form`
    background-color: #ffffff
`

const Field = styled.input`
    width: 100%;
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
`