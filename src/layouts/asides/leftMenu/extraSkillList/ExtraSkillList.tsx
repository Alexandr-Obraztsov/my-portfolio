import React from 'react';
import styled from "styled-components";
import layers from "../../../../assets/images/layers.svg"

export const ExtraSkillList = () => {
    return (
        <StyledExtraSkillList>
            <ExtraSkill>Bootstrap, Materialize</ExtraSkill>
            <ExtraSkill>Stylus, Sass, Less</ExtraSkill>
            <ExtraSkill>Gulp, Webpack, Grunt</ExtraSkill>
            <ExtraSkill>GIT Knowledge</ExtraSkill>
        </StyledExtraSkillList>
    );
};

const StyledExtraSkillList = styled.ul`
    list-style: none;
    margin-bottom: 50px;
`

const ExtraSkill = styled.li`
    
    &:before {
        content: url(${layers});
        margin-right: 15px;
        display: inline-block;
    }
    
    & + & {
        margin-top: 30px;
    }
    
`