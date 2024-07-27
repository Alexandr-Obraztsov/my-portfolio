import React from 'react';
import './App.css';
import styled from "styled-components";
import {MyServices} from "./layouts/sections/myServices/MyServices";
import {PricePlans} from "./layouts/sections/pricePlans/PricePlans";
import {Recommendations} from "./layouts/sections/recommendations/Recommendations";
import {Education} from "./layouts/sections/education/Education";
import {WorkHistory} from "./layouts/sections/workHistory/WorkHistory";
import {Portfolio} from "./layouts/sections/portfolio/Portfolio";
import {Blog} from "./layouts/sections/blog/Blog";
import {Logos} from "./layouts/sections/logos/Logos";
import {Footer} from "./layouts/footer/Footer";
import {Contacts} from "./layouts/sections/contacts/Contacts";
import {RightMenu} from "./layouts/asides/rightMenu/RightMenu";
import {LeftMenu} from "./layouts/asides/leftMenu/LeftMenu";
import {FlexWrapper} from "./components/FlexWrapper";
import {MainMenu} from "./layouts/sections/mainMenu/MainMenu";


function App() {
    return (
        <FlexWrapper alignItems="flex-start" gap="20px">
            <Content>
                <LeftMenu/>
                <MainContent>
                    <MainMenu/>
                    <MyServices/>
                    <PricePlans/>
                    <Recommendations/>
                    <Education/>
                    <WorkHistory/>
                    <Portfolio/>
                    <Blog/>
                    <Contacts/>
                    <Logos/>
                    <Footer/>
                </MainContent>
            </Content>

            <RightMenu/>
        </FlexWrapper>
    );
}


const MainContent = styled.div`
`

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    height: 100vh;
    overflow-y: auto;
    gap: 20px;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

export default App;
