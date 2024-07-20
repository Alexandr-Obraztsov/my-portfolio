import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

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
                    <Persentages>{props.value}%</Persentages>
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
`

const Persentages = styled.span`
`

const ProgressBar = styled.progress`
`

