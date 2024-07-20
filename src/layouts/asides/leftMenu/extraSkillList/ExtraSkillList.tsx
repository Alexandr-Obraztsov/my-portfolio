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
    list-style-image: url(${layers});
`

const ExtraSkill = styled.li`

`