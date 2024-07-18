import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import Icon from "../../../../components/icon/Icon";


export const Rating = (props: {stars: number}) => {
    return (
        <StyledRating>
            <FlexWrapper gap="10px">
                {[...Array(props.stars)].map((_, index) => (
                    <Icon id="star" width="18" height="18" key={index}/>
                ))}
            </FlexWrapper>
        </StyledRating>
    );
};

const StyledRating = styled.div`
`