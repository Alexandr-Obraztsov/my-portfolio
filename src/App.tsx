import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from "./components/icon/Icon";
import {MainMenu} from "./layouts/sections/mainMenu/MainMenu";
import styled from "styled-components";

function App() {
    return (
        <Box>
            <MainMenu/>
        </Box>
    );
}


const Box = styled.div`
    padding-left: 335px;
    padding-right: 135px;
`


export default App;
