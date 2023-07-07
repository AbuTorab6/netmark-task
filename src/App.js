
import './asset/css/custom.css'

import {BrowserRouter} from 'react-router-dom'

import Hero from './components/Hero';
import About from './components/About';
import Course from './components/Course';
import Services from './components/Services';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Navigation from './components/Navigation';


import AboutTop from './components/AboutTop';
import WhyUs from './components/WhyUs';
import OurMission from './components/OurMission';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import AllTeam from './components/AllTeam';
import TestimonialForTeam from './components/TestimonialForTeam';
import TeamDetail from './components/TeamDetail';
import SkillBar from './components/SkillBar';
import CourseDetail from './components/CourseDetail';

import SolutyaPortfolio from './components/SolutyaPortfolio';

import MyRouter from './router/MyRouter';


function App() {
  return (
    <div className="App">
      <MyRouter/>
      
       
    </div>
  );
}

export default App;
