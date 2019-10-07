import React, {Fragment} from 'react'
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Panel from './Panel/Panel';
import Description from './Description/Description';
import TwoDesc from './TwoDesc/TwoDesc';
import Footer from './Footer/Footer';


const LandingPage = () => {
    return ( 
        <Fragment>
        <Navbar/>
        <Jumbotron/>
        <Panel/>
        <Description/>
        <TwoDesc/>
        <Footer/>
        </Fragment>
     );
}
 
export default LandingPage;