import React,{Fragment} from 'react';


import team1 from '../asset/image/team1.png'
import team2 from '../asset/image/team22.png'
import team3 from '../asset/image/team33.png'
import team4 from '../asset/image/team44.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Slide   from 'react-reveal/Rotate';


const Team = () => 
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
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          },
          smalltablet: {
            breakpoint: { max: 400, min: 200 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
      };


    return (
        <Fragment>
            <section className='team-section'>
                <div className='row'>
                    <h4>Team Member</h4>
                    <h2>Popular Professional  <br/> Teachers</h2>

                    <Carousel 
                        responsive={responsive} 
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        arrows={false}
                        >
                            
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team1} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team2} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team3} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team4} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team1} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team3} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        
                    </Carousel>
                    <Carousel 
                        responsive={responsive} 
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        arrows={false}
                        rtl={true}
                        >
                            
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team1} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team2} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team3} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team4} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team1} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        
                        
                    </Carousel>
                    {/* <div className='team-grid'>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team1} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team2} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team3} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team4} /></div>
                            <div className='team-overlay'>
                                <h3 className='member-name'>Pushpa Kanon</h3>
                                <p className='member-des'>CEO, derhab</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                
            </section>
        </Fragment>
    );
};

export default Team;