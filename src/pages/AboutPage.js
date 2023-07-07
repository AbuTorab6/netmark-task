import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation'
import AboutTop from '../components/AboutTop';
import WhyUs from '../components/WhyUs';
import OurMission from '../components/OurMission';
import AllTeam from '../components/AllTeam';
import Footer from '../components/Footer';


const AboutPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <AboutTop pageTitle="About"/>
            <WhyUs/>
            <OurMission/>
            <AllTeam/>
            <Footer/>
        </Fragment>
    );
};

export default AboutPage;