import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation'
import AboutTop from '../components/AboutTop';
import TeamDetail from '../components/TeamDetail';
import SkillBar from '../components/SkillBar';
import Team from '../components/Team';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const TeamDetailPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <AboutTop pageTitle="Team Detail"/>
            <TeamDetail/>
            <SkillBar/>
            <Team/>
            <ContactForm/>
            <Footer/>
        </Fragment>
    );
};

export default TeamDetailPage;