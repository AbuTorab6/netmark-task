
import React,{Fragment} from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import CoursePage from '../pages/CoursePage';
import ContactPage from '../pages/ContactPage';
import TeamPage from '../pages/TeamPage';
import TeamDetailPage from '../pages/TeamDetailPage';
import CourseDetailPage from '../pages/CourseDetailPage';

const MyRouter = () => {
    return (
        <Fragment>
             <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/about' element={<AboutPage/>} />
                    <Route path='/course' element={<CoursePage/>} />
                    <Route path='/contact' element={<ContactPage/>} />
                    <Route path='/team' element={<TeamPage/>} />
                    <Route path='/teamDetail' element={<TeamDetailPage/>} />
                    <Route path='/courseDetail' element={<CourseDetailPage/>} />
                </Routes>
             </BrowserRouter>
        </Fragment>
    );
};

export default MyRouter;