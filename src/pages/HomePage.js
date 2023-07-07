import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation'
import Hero from '../components/Hero';
import About from '../components/About';
import Course from '../components/Course';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const HomePage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <Hero/>
        <About/>
        <Course/>
        <Services/>
        <Team/>
        <Testimonial/>
        <Footer/>
        </Fragment>
    );
};

export default HomePage;