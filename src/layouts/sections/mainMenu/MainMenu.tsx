import React from 'react';
import styled from "styled-components";
import {Link} from "../../../components/link/Link";
import {theme} from "../../../styles/Theme";
import me from "../../../assets/images/me.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Description} from "../../../components/Description";

export const MainMenu = () => {
    return (
        <StyledMainMenu id="home">
                <FlexWrapper justifyContent="center" wrap="wrap">
                    <Content>
                        <Title>I’m Rayan Adlrdar<br/><span>Front-end</span> Developer</Title>
                        <Description margin="0 0 25px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                            Natoque rutrum semper sed suspendisse nunc lectus.
                        </Description>
                        <Link text={"HIRE ME"} icon={{id: "arrow", width: "12", height: "12"}}/>
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

const StyledMainMenu = styled.section`
    background-color: ${theme.colors.secondaryBg};
    padding: 0 60px;
`

const Content = styled.article`
    padding-top: 90px;
    padding-bottom: 74px;
    flex: 1 1 300px;
`

const Picture = styled.img`
    align-self: flex-end;
    object-fit: cover;
`