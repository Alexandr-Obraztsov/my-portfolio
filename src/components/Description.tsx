import styled from "styled-components";
import {theme} from "../styles/Theme";

type DescriptionPropsType = {
    margin?: string
    centered?: boolean
}

export const Description = styled.p<DescriptionPropsType>`
    text-align: ${props => props.centered ? "center" : "left"};
    margin: ${props => props.margin || "0 auto 50px"};
    color: ${theme.colors.secondaryText};
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
`