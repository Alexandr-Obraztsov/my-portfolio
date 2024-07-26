import styled from "styled-components";
import {theme} from "../styles/Theme";

type SectionTitlePropsType = {
    left?: boolean
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    text-align: ${props => props.left ? "left" : "center" };
    margin-top: 70px;
    margin-bottom: 25px;
    color: ${theme.colors.primaryText};
    font-weight: 700;
    font-size: 32px;
`