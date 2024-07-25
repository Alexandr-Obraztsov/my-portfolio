import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {theme} from "../../../styles/Theme";
import me from "../../../assets/images/me.png";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const MainMenu = () => {
    return (
        <StyledMainMenu>
                <FlexWrapper justifyContent="space-between" wrap="wrap">
                    <Content>
                        <Title>I’m Rayan Adlrdard <span>Front-end</span> Developer</Title>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                            Natoque rutrum semper sed suspendisse nunc lectus.
                        </Description>
                        <Button text={"HIRE ME"} icon={{id: "arrow", width: "12", height: "12"}}/>
                    </Content>
                    <Picture src={me}/>
                </FlexWrapper>
        </StyledMainMenu>
    );
};

const Title = styled.h2`
    font-size: 48px;
    line-height: 60px;
    color: ${theme.colors.primaryText};
    margin-bottom: 20px;

    span {
        color: ${theme.colors.accent};
    }
`

const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.secondaryText};
    max-width: 450px;
    margin-bottom: 25px;
`

const StyledMainMenu = styled.section`
    background-color: ${theme.colors.secondaryBg};
    padding: 0 60px;
`

const Content = styled.article`
    flex: 1 2 100px;
    padding-top: 90px;
    padding-bottom: 74px;
`

const Picture = styled.img`
    align-self: flex-end;
    object-fit: cover;
`