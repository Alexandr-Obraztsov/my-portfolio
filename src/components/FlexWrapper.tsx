import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string,
    justifyContent?: string,
    alignItems?: string,
    wrap?: string,
    gap?: string
    width?: string,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'};
    max-width: ${props => props.width || '100%'};
    width: 100%;
`