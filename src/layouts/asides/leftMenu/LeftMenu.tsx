import React from 'react';
import styled from "styled-components";
import james from "../../../assets/images/james.webp"
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Progress} from "./progress/Progress";
import {ExtraSkillList} from "./extraSkillList/ExtraSkillList";
import {Button} from "../../../components/button/Button";

export const LeftMenu = () => {
    return (
        <StyledLeftMenu>
            <Image src={james}/>
            <Title>Rayan Adlardard</Title>
            <Description>Font-end Developer</Description>
            <SocialMenu>
                <FlexWrapper gap="10px">
                    <li><a href="#"><Icon id="facebook" width="7" height="12"/></a></li>
                    <li><a href="#"><Icon id="instagram" width="15" height="15"/></a></li>
                    <li><a href="#"><Icon id="twitter" width="15" height="15"/></a></li>
                    <li><a href="#"><Icon id="linkedin" width="15" height="15"/></a></li>
                    <li><a href="#"><Icon id="youtube" width="15" height="15"/></a></li>
                    <li><a href="#"><Icon id="dribble" width="15" height="15"/></a></li>
                </FlexWrapper>
            </SocialMenu>
            <span>Age: 24</span>
            <span>Residence: BD</span>
            <span>Freelance: Available</span>
            <span>Address: Dhaka,Bangladesh</span>
            <Title>Languages</Title>
            <Progress text="Bangla" value="100"/>
            <Progress text="English" value="80"/>
            <Progress text="Spanish" value="60"/>
            <Title>Skills</Title>
            <Progress text="HTML" value="90"/>
            <Progress text="CSS" value="85"/>
            <Progress text="Js" value="80"/>
            <Progress text="PHP" value="75"/>
            <Progress text="WordPress" value="85"/>
            <Title>Extra Skills</Title>
            <ExtraSkillList/>
            <Button text="Download CV" href="#"/>
        </StyledLeftMenu>
    );
};

const StyledLeftMenu = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    width: 315px;
    height: 100vh;
    background-color: #61dafb;
`

const Image = styled.img`
 width: 100px;
`

const Title = styled.h2`

`

const Description = styled.span`

`

const SocialMenu = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
