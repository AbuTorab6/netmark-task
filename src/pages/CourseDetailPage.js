import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation'
import AboutTop from '../components/AboutTop';

import CourseDetail from '../components/CourseDetail';
import Footer from '../components/Footer';


const CourseDetailPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <AboutTop pageTitle="Course Details"/>
            <CourseDetail/>
            <Footer/>
        </Fragment>
    );
};

export default CourseDetailPage;