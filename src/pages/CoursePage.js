import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation'
import AboutTop from '../components/AboutTop';
import Course from '../components/Course';
import Footer from '../components/Footer';

const CoursePage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <AboutTop pageTitle="Course"/>
            <Course/>
            <Footer/>
        </Fragment>
    );
};

export default CoursePage;