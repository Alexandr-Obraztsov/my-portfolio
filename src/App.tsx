import React from 'react';
import './App.css';
import {MainMenu} from "./layouts/sections/mainMenu/MainMenu";
import styled from "styled-components";
import {MyServices} from "./layouts/sections/myServices/MyServices";
import {PricePlans} from "./layouts/sections/pricePlans/PricePlans";
import {Recommendations} from "./layouts/sections/recommendations/Recommendations";
import {Education} from "./layouts/sections/education/Education";
import {WorkHistory} from "./layouts/sections/workHistory/WorkHistory";

function App() {
    return (
        <Box>
            <MainMenu/>
            <MyServices/>
            <PricePlans/>
            <Recommendations/>
            <Education/>
            <WorkHistory/>
        </Box>
    );
}


const Box = styled.div`
    padding-left: 335px;
    padding-right: 135px;
`


export default App;
