import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/button/Button";

export const MainMenu = () => {
    return (
        <StyledMainMenu>
            <Title>I’m Rayan Adlrdard Front-end Developer</Title>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
            </Description>
            <Button text={"HIRE ME"} icon={{id: "arrow", width: "12", height: "12"}} />
        </StyledMainMenu>
    );
};

const Title = styled.h2`
    
`

const Description = styled.p`
    
`

const StyledMainMenu = styled.section`
    background-color: #61dafb;
    width: 100%;
    min-height: 500px;
`
