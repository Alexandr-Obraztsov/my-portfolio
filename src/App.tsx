import React from 'react';
import './App.css';
import {MainMenu} from "./layouts/sections/mainMenu/MainMenu";
import styled from "styled-components";
import {MyServices} from "./layouts/sections/myServices/MyServices";
import {PricePlans} from "./layouts/sections/pricePlans/PricePlans";
import {Recommendations} from "./layouts/sections/recommendations/Recommendations";
import {Education} from "./layouts/sections/education/Education";
import {WorkHistory} from "./layouts/sections/workHistory/WorkHistory";
import {Portfolio} from "./layouts/sections/portfolio/Portfolio";
import {Blog} from "./layouts/sections/blog/Blog";
import {FlexWrapper} from "./components/FlexWrapper";
import {LeaveUsYourInfo} from "./layouts/sections/leaveUsYourInfo/LeaveUsYourInfo";
import {ContactInformation} from "./layouts/sections/contactInformation/ContactInformation";
import {Logos} from "./layouts/sections/logos/Logos";
import {Footer} from "./layouts/footer/Footer";


function App() {
    return (
        <Box>
            <MainMenu/>
            <MyServices/>
            <PricePlans/>
            <Recommendations/>
            <Education/>
            <WorkHistory/>
            <Portfolio/>
            <Blog/>
            <FlexWrapper>
                <LeaveUsYourInfo/>
                <ContactInformation/>
            </FlexWrapper>
            <Logos/>
            <Footer/>
        </Box>
    );
}


const Box = styled.div`
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
`


export default App;
