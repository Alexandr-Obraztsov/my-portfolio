import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string,
    justifyContent?: string,
    alignItems?: string,
    wrap?: string
}

const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${(props: { direction?: string }) => props.direction || 'row'};
    justify-content: ${(props: { justifyContent?: string }) => props.justifyContent || 'flex-start'};
    align-items: ${(props: { alignItems?: string }) => props.alignItems || 'flex-start'};
    flex-wrap: ${(props: { wrap?: string }) => props.wrap || 'nowrap'};
`