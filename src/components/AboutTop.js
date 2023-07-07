import React,{Fragment} from 'react';
import Fade from 'react-reveal/Fade';

const AboutTop = (ob) => {
    return (
        <Fragment>
            <section className='about-top-section'>
                <div className='about-top-content'>
                    <Fade bottom><h2>Home &#62; <span>{ob.pageTitle}</span></h2></Fade>
                </div>
            </section>
        </Fragment>
    );
};

export default AboutTop;