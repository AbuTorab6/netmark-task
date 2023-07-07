import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation'
import AboutTop from '../components/AboutTop';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <AboutTop pageTitle="Contact"/>
            <Contact/>
            <ContactForm/>
            <Footer/>
        </Fragment>
    );
};

export default ContactPage;