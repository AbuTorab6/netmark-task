import React,{Fragment} from 'react';

import playBtn from '../asset/image/playBtn.png'
import heroimg from '../asset/image/hero-img.png'

import polygon from '../asset/image/Polygon.png'
import dotedBottom from '../asset/image/dotedBottom.png'
import dotedTop from '../asset/image/dotedTop.png'
import dotedBottomRight from '../asset/image/dotedBottomRight.png'

import mouse from '../asset/image/mouse.png'
import mouse2 from '../asset/image/mouse2.png'

import batch from '../asset/image/batch.png'
import loop from '../asset/image/loop.png'

import google from '../asset/image/google.png'
import ms from '../asset/image/ms3.png'
import dribble from '../asset/image/dribble.png' 
import lattice from '../asset/image/lattice.png'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Fade from 'react-reveal/Fade';

const Hero = () => 
{
    
    const responsive = {
        verybigdesktop: {
            breakpoint: { max: 3000, min: 1450 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
          },
        bigdesktop: {
          breakpoint: { max: 1450, min: 1300 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        desktop: {
            breakpoint: { max: 1300, min: 768 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
          },
        smalltablet: {
            breakpoint: { max: 768, min: 400 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
          },
          smalltablet: {
            breakpoint: { max: 400, min: 200 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
          }
      };
    return (
        <Fragment>
            <section className='hero-section'>
           
                <div className='row'>
                    <div className='hero-grid hero-grid-big-screen'>
                        <div className='col left'>
                            <div className='text-box'>
                                <Fade bottom><h1>For Every Student Every Classroom.<br/><span className='blue'>Real Results.</span></h1></Fade>
                                <Fade bottom><p className='hero-des-small'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a completeLorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusm</p></Fade>
                                <Fade left><button className='hero-btn'><a className='text-none-white' href="#">Get Started</a></button></Fade>
                                <Fade left><a className='text-none-white' href="#"><img className='playBtn' src={playBtn} /></a></Fade>
                                <Fade right><span className='watch'>Watch Video</span></Fade>
                            </div>
                            <img className='loop' src={loop} />
                        </div>

                        <div className='col right'>
                            <div className='heroImage'>
                                <img className='polygon' src={polygon} />
                                <img className='dotedTop' src={dotedTop} />
                                <img className='mouse' src={mouse} />
                                <img className='heroImg' src={heroimg} />
                                <img className='mouse2' src={mouse2} />
                                <img className='dotedBottom' src={dotedBottom} />
                                <img className='dotedBottomRight' src={dotedBottomRight} />
                                


                                <div className='hero-card'>
                                    <div className='hero-card-top-grid'>
                                        <div >
                                        <div className='batchImage'><img className='batchImg' src={batch} /></div>
                                        </div>
                                        <div >
                                            <p>Counting</p>
                                            <h4>100,585+</h4>
                                        </div>
                                    </div>
                                    <div className='hero-card-bottom-grid'>
                                        <p>Graduations</p>
                                        <p>5.5 Year</p>
                                    </div>
                                </div>
                         </div>
                        </div>
                    </div>


                    

                    
                        <Carousel 
                            responsive={responsive} 
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            arrows={false}
                        >
                            <div>
                            <Fade left><div className='hero-bottom-grid-image'><img className='hero-bottom-grid-img' src={google} /></div></Fade>
                        </div>
                        <div>
                         <Fade bottom><div className='hero-bottom-grid-image mt-3'><img className='hero-bottom-grid-img' src={ms} /></div></Fade>
                        </div>
                        <div>
                        <Fade top><div className='hero-bottom-grid-image mt-4'><img className='hero-bottom-grid-img dribble' src={dribble} /></div></Fade>
                        </div>
                        <div>
                        <Fade right><div className='hero-bottom-grid-image mt-3'><img className='hero-bottom-grid-img lattice' src={lattice} /></div></Fade>
                        </div>

                        </Carousel>
                   

                </div>
            </section>
        </Fragment>
    );
};

export default Hero;