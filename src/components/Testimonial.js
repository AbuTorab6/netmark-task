import React,{Fragment} from 'react';

import rightArrow from '../asset/image/rightArrow.png'
import testimonialImg from '../asset/image/testimonialImg.png'
import smallStar2 from '../asset/image/smallStar.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { AiFillStar } from "react-icons/ai";

import Fade from 'react-reveal/Fade';

const Testimonial = () => 
{

    
    const responsive = {
        verybigdesktop: {
            breakpoint: { max: 3000, min: 100 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
      };

    return (
        <Fragment>
            <section className='testimonial-section'>
                <div className='row'>
                <Carousel 
                    responsive={responsive} 
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    arrows={false}
                    showDots={true}
                >
                            
                    <div className='testimonial-grid '>
                            
                        <div className='col'>
                            <div className='big-screen'>
                                <Fade bottom><h4>Testimonial</h4></Fade>
                                <Fade bottom><h2>What They Say?</h2></Fade>

                                <Fade bottom><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh.<br/><br/> 
                                enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></Fade>
                                <div className='testimonial-inner-grid'>
                                    <div>
                                        <h3 >Ruksana Akter</h3>
                                        <span className='client-des'>Marketing</span>
                                    </div>
                                    <div className='review-star'>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                    </div>
                                </div>
                                {/* <div>
                                    <input className='testimonial-input' type='text' placeholder='Write Your Assesment'/><span  className='rightArrow'>&rarr;</span>
                                </div> */}
                            </div>
                            <div className='small-screen'>
                                <Fade bottom><h4>Testimonial</h4></Fade>
                                <Fade bottom><h2>What They Say?</h2></Fade>
                                <div className='testimonialImageSmall'><img className='testimonialImgSmall' src={testimonialImg} /></div>
                            </div>
                        </div>
                        
                        <div className='col'>
                            <div className='big-screen'>
                                <div className='testimonialImage'>
                                    <img className='testimonialImg' src={testimonialImg} />
                                    {/* <div className='argu'>
                                        <p> Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in repreh </p>

                                        <h3 >Ruksana Akter</h3>
                                        <img className='smallStar2' src={smallStar2} />
                                    </div> */}
                                    {/* <span  className='rightArrow2'>&rarr;</span> */}
                                </div>
                            </div>
                            <div className='small-screen'>
                                <Fade bottom><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh.<br/><br/> 
                                enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></Fade>
                                <div className='testimonial-inner-grid'>
                                    <div>
                                        <h3 >Ruksana Akter</h3>
                                        <span className='client-des'>Marketing</span>
                                    </div>
                                    <div className='review-star'>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                        <span className='review-star-icon'><AiFillStar/></span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className='testimonial-grid '>
                            
                            <div className='col'>
                                <div className='big-screen'>
                                    <Fade bottom><h4>Testimonial</h4></Fade>
                                    <Fade bottom><h2>What They Say?</h2></Fade>
    
                                    <Fade bottom><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh.<br/><br/> 
                                    enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></Fade>
                                    <div className='testimonial-inner-grid'>
                                        <div>
                                            <h3 >Ruksana Akter</h3>
                                            <span className='client-des'>Marketing</span>
                                        </div>
                                        <div className='review-star'>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <input className='testimonial-input' type='text' placeholder='Write Your Assesment'/><span  className='rightArrow'>&rarr;</span>
                                    </div> */}
                                </div>
                                <div className='small-screen'>
                                    <Fade bottom><h4>Testimonial</h4></Fade>
                                    <Fade bottom><h2>What They Say?</h2></Fade>
                                    <div className='testimonialImageSmall'><img className='testimonialImgSmall' src={testimonialImg} /></div>
                                </div>
                            </div>
                            
                            <div className='col'>
                                <div className='big-screen'>
                                    <div className='testimonialImage'>
                                        <img className='testimonialImg' src={testimonialImg} />
                                        {/* <div className='argu'>
                                            <p> Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in repreh </p>
    
                                            <h3 >Ruksana Akter</h3>
                                            <img className='smallStar2' src={smallStar2} />
                                        </div> */}
                                        {/* <span  className='rightArrow2'>&rarr;</span> */}
                                    </div>
                                </div>
                                <div className='small-screen'>
                                    <Fade bottom><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh.<br/><br/> 
                                    enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></Fade>
                                    <div className='testimonial-inner-grid'>
                                        <div>
                                            <h3 >Ruksana Akter</h3>
                                            <span className='client-des'>Marketing</span>
                                        </div>
                                        <div className='review-star'>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                            <span className='review-star-icon'><AiFillStar/></span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </Carousel>
                </div>
            </section>
        </Fragment>
    );
};

export default Testimonial;