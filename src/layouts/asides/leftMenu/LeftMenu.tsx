import React from 'react';
import styled from "styled-components";
import me from "../../../assets/images/me.jpeg"
import {Progress} from "./progress/Progress";
import {ExtraSkillList} from "./extraSkillList/ExtraSkillList";
import {Link} from "../../../components/link/Link";
import {theme} from "../../../styles/Theme";
import {SocialMenu} from "./socialMenu/SocialMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Description} from "../../../components/Description";

export const LeftMenu = () => {
    return (
        <StyledLeftMenu>
            <Section>
                <FlexWrapper direction="column" alignItems="center">
                    <Image src={me}/>
                    <Title>Rayan Adlardard</Title>
                    <Description margin="0 0 15px 0">Font-end Developer</Description>
                    <SocialMenu/>
                </FlexWrapper>
            </Section>
            <Section>
                <Text><MarkeredText>Age:</MarkeredText> 24</Text>
                <Text><MarkeredText>Residence:</MarkeredText> BD</Text>
                <Text><MarkeredText>Freelance:</MarkeredText> Available</Text>
                <Text><MarkeredText>Address:</MarkeredText> Dhaka,Bangladesh</Text>
            </Section>
            <Section>
                <Title>Languages</Title>
                <Progress text="Bangla" value="100"/>
                <Progress text="English" value="80"/>
                <Progress text="Spanish" value="60"/>
            </Section>
            <Section>
                <Title>Skills</Title>
                <Progress text="HTML" value="90"/>
                <Progress text="CSS" value="85"/>
                <Progress text="Js" value="80"/>
                <Progress text="PHP" value="75"/>
                <Progress text="WordPress" value="85"/>
            </Section>
            <Section>
                <Title>Extra Skills</Title>
                <ExtraSkillList/>
            </Section>
            <Link text="Download CV" href="#" icon={{id: "cv2", width: "14", height: "17"}} padding="10px 40px"/>
        </StyledLeftMenu>
    );
};

const StyledLeftMenu = styled.aside`
    background-color: ${theme.colors.secondaryBg};
    padding: 50px 45px 25px 40px;
`

const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 30px;
`

const Title = styled.h2`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 15px;
`

const Section = styled.section`
    margin-bottom: 50px;
    position: relative;
    
    & {
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -25px;
            display: inline-block;
            height: 2px;
            background-color: ${theme.colors.primaryBg};
        }
    }
`

const Text = styled.span`
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 400;
    
    & + & {
        margin-top: 10px;
    }
`

const MarkeredText = styled.span`
    background-color: ${theme.colors.accent};
    display: inline-block;
    padding: 0 5px;
`