import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type ProgressPropsType = {
    text: string
    value: string
}

export const Progress = (props: ProgressPropsType) => {
    return (
        <StyledProgress>
            <FlexWrapper direction="column">
                <FlexWrapper justifyContent="space-between">
                    <Text>{props.text}</Text>
                    <Text>{props.value}%</Text>
                </FlexWrapper>
                <ProgressBar max="100" value={props.value}/>
            </FlexWrapper>
        </StyledProgress>
    );
};

const StyledProgress = styled.label`
    display: flex;
    align-items: center;
`

const Text = styled.span`
    color: ${theme.colors.secondaryText};
    font-size: 15px;
    font-weight: 400;
`

const ProgressBar = styled.progress`
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
    height: 6px;
    border: 1px solid orange;
    border-radius: 3px;
    padding: 1px;

    &::-webkit-progress-bar {
        background-color: ${theme.colors.secondaryBg};
    }

    &::-webkit-progress-value {
        background-color: ${theme.colors.accent};
        border-radius: 1px;
    }

    &::-moz-progress-bar {
        background-color: ${theme.colors.accent};
    }
`

