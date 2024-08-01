import React from 'react';
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
import {theme} from "./styles/Theme";


function App() {
    return (
        <>
            <Content alignItems="flex-start" justifyContent="center" height="100vh" gap="20px">
                <LeftMenu/>
                <Container direction="column" gap="70px">
                    <MainMenu/>
                    <MyServices/>
                    {/*<PricePlans/>*/}
                    {/*<Recommendations/>*/}
                    {/*<Education/>*/}
                    {/*<WorkHistory/>*/}
                    {/*<Portfolio/>*/}
                    {/*<Blog/>*/}
                    {/*<Contacts/>*/}
                    {/*<Logos/>*/}
                    {/*<Footer/>*/}
                </Container>
            </Content>

            <RightMenu/>
        </>
    );
}


const Container = styled(FlexWrapper)`
    max-width: 1520px;
    width: 100%;
    
    ${theme.media.tablet} {
        padding-bottom: 80px;
    }
`

const Content = styled(FlexWrapper)`
    overflow-y: auto;
    margin-right: 128px;
    width: unset;
    padding: 15px;
    
    ${theme.media.tablet} {
        margin-right: 0;
    }
`

export default App;
