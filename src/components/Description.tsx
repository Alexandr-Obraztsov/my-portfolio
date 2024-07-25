import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type DescriptionPropsType = {
    centered?: boolean,
    margin?: string
}

export const Description = styled.p<DescriptionPropsType>`
    ${props => props.centered && css`text-align: center;`}
    max-width: 440px;
    width: 100%;
    margin: ${props => props.margin || "0 auto 50px"};
    color: ${theme.colors.secondaryText};
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
`