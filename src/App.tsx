import React from 'react';
import './App.css';
import {MainMenu} from "./layouts/sections/mainMenu/MainMenu";
import styled from "styled-components";
import {MyServices} from "./layouts/sections/myServices/MyServices";
import {PricePlans} from "./layouts/sections/pricePlans/PricePlans";

function App() {
    return (
        <Box>
            <MainMenu/>
            <MyServices/>
            <PricePlans/>
        </Box>
    );
}


const Box = styled.div`
    padding-left: 335px;
    padding-right: 135px;
`


export default App;
