import React from 'react';
import styled from "styled-components";
import Icon from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ContactCardPropsType = {
    icon: {
        id: string,
        width: string,
        height: string
    },

    titles: Array<string>,
    texts: Array<string>
}

export const ContactCard = (props: ContactCardPropsType) => {
    return (
        <StyledContactCard>
            <Icon id={props.icon.id} width={props.icon.width} height={props.icon.height}/>
            {props.titles.map((title, index) =>
                <FlexWrapper justifyContent="space-between">
                    {title}<RightText>{props.texts[index]}</RightText>
                </FlexWrapper>
            )}
        </StyledContactCard>
    );
};

const StyledContactCard = styled.div`
    background-color: aliceblue;
    flex: 1 1 auto;
`

const RightText = styled.span`
`
