import React,{Fragment,useEffect} from 'react';


import Navigation from '../components/Navigation'
import AboutTop from '../components/AboutTop';
import AllTeam from '../components/AllTeam';
import TestimonialForTeam from '../components/TestimonialForTeam';
import Footer from '../components/Footer';


const TeamPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <AboutTop pageTitle="Our Team"/>
            <AllTeam/>
            <TestimonialForTeam/>
            <Footer/>
        </Fragment>
    );
};

export default TeamPage;