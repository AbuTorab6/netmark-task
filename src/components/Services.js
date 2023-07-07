import React,{Fragment,useEffect} from 'react';

import serviceImg1 from '../asset/image/serviceImg1.png'
import serviceImg2 from '../asset/image/serviceImg2.png'
import serviceImg3 from '../asset/image/serviceImg3.png'
import serviceImg4 from '../asset/image/serviceImg4.png'
import serviceImg5 from '../asset/image/serviceImg5.png'
import serviceImg6 from '../asset/image/serviceImg6.png'
import serviceImg7 from '../asset/image/serviceImg7.png'
import serviceImg8 from '../asset/image/serviceImg8.png'

import serviceImgHover1 from '../asset/image/development.png'
import serviceImgHover2 from '../asset/image/business.png'
import serviceImgHover3 from '../asset/image/ui.png'
import serviceImgHover4 from '../asset/image/marketing.png'
import serviceImgHover5 from '../asset/image/photography.png'
import serviceImgHover6 from '../asset/image/graphics.png'

import serviceBall1 from '../asset/image/serviceBall1.png'
import serviceBall2 from '../asset/image/serviceBall2.png'
import serviceBall3 from '../asset/image/serviceBall3.png'


import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';


const Services = () => 
{

    useEffect(()=>{
        document.querySelector(".services-grid").childNodes[2].classList.add("service-active");


        // ball start
        document.querySelector(".services-grid").childNodes[2].querySelector('.serviceBall1').classList.remove("display-none");
        document.querySelector(".services-grid").childNodes[2].querySelector('.serviceBall2').classList.remove("display-none");
        document.querySelector(".services-grid").childNodes[2].querySelector('.serviceBall3').classList.remove("display-none");
        // ball end
      
    },[])

    var serviceActive = (p1)=>
    {
        var element = p1.target;
        element.classList.add("service-active");

        console.log(p1.target)

        // ball start
        p1.target.querySelector('.serviceBall1').classList.remove("display-none");
        p1.target.querySelector('.serviceBall2').classList.remove("display-none");
        p1.target.querySelector('.serviceBall3').classList.remove("display-none");
        // ball end

        p1.target.childNodes[0].classList.add("display-none");
        p1.target.childNodes[1].classList.remove("display-none");
        
        if(p1.target!==document.querySelector(".services-grid").childNodes[2])
        {
            document.querySelector(".services-grid").childNodes[2].classList.remove("service-active");

            document.querySelector(".services-grid").childNodes[2].childNodes[2].classList.remove("display-none");
            document.querySelector(".services-grid").childNodes[2].childNodes[0].classList.add("display-none");

             // ball start
            document.querySelector(".services-grid").childNodes[2].querySelector('.serviceBall1').classList.add("display-none");
            document.querySelector(".services-grid").childNodes[2].querySelector('.serviceBall2').classList.add("display-none");
            document.querySelector(".services-grid").childNodes[2].querySelector('.serviceBall3').classList.add("display-none");
            // ball end
        }

        if(p1.target==document.querySelector(".services-grid").childNodes[2])
        {
            
            document.querySelector(".services-grid").childNodes[2].childNodes[0].classList.add("display-none");

            document.querySelector(".services-grid").childNodes[2].childNodes[2].classList.add("display-none");
            document.querySelector(".services-grid").childNodes[2].childNodes[1].classList.remove("display-none");
        }
    }

    
    var removeServiceActive = (p1)=>
    {
        var element = p1.target;
        element.classList.remove("service-active");

        // ball start
        p1.target.querySelector('.serviceBall1').classList.add("display-none");
        p1.target.querySelector('.serviceBall2').classList.add("display-none");
        p1.target.querySelector('.serviceBall3').classList.add("display-none");
        // ball end

        p1.target.childNodes[1].classList.add("display-none");
        p1.target.childNodes[0].classList.remove("display-none");

        if(p1.target==document.querySelector(".services-grid").childNodes[2])
        {
            
            document.querySelector(".services-grid").childNodes[2].childNodes[0].classList.add("display-none");

            document.querySelector(".services-grid").childNodes[2].childNodes[2].classList.remove("display-none");
            document.querySelector(".services-grid").childNodes[2].childNodes[1].classList.add("display-none");
            document.querySelector(".services-grid").childNodes[2].childNodes[3].classList.remove("display-none");

            
        }
    }

    return (
        <Fragment>
            <section className='services-section'>
                <div className='row'>
                <Fade left><h4>Service</h4></Fade>
                <Fade left><h2>Top <br/> Categories</h2></Fade>

                    <div className='services-grid'>
                        <Flip left>
                        <div className='col' onMouseOver={serviceActive} onMouseLeave={removeServiceActive}>
                            <div className='serviceImage main-img'><img className='serviceImg' src={serviceImg1} /></div>
                            <div className='serviceImage display-none  hover-img'><img className='serviceImg' src={serviceImgHover1} /></div>
                            <h3>Development</h3>

                            <img className=' serviceBall1 display-none' src={serviceBall1} />
                            <img className=' serviceBall2 display-none' src={serviceBall2} />
                            <img className=' serviceBall3 display-none' src={serviceBall3} />
                        </div>
                        </Flip>
                        <Flip left>
                        <div className='col' onMouseOver={serviceActive} onMouseLeave={removeServiceActive}>
                            <div className='serviceImage main-img'><img className='serviceImg' src={serviceImg2} /></div>
                            <div className='serviceImage display-none hover-img'><img className='serviceImg' src={serviceImgHover2} /></div>
                            <h3>Business</h3>

                            <img className=' serviceBall1 display-none' src={serviceBall1} />
                            <img className=' serviceBall2 display-none' src={serviceBall2} />
                            <img className=' serviceBall3 display-none' src={serviceBall3} />
                        </div>
                        </Flip>
                        <Flip left>
                        <div className='col ' onMouseOver={serviceActive} onMouseLeave={removeServiceActive}>
                            <div className='serviceImage main-img'><img className='serviceImg' src={serviceImg3} /></div>
                            <div className='serviceImage display-none hover-img'><img className='serviceImg' src={serviceImgHover1} /></div>
                            <div className='serviceImage display-none hover-img'><img className='serviceImg' src={serviceImg1} /></div>
                            <h3 className=''>IT and Software</h3>

                            <img className=' serviceBall1 display-none' src={serviceBall1} />
                            <img className=' serviceBall2 display-none' src={serviceBall2} />
                            <img className=' serviceBall3 display-none' src={serviceBall3} />
                        </div>
                        </Flip>
                        <Flip left>
                        <div className='col' onMouseOver={serviceActive} onMouseLeave={removeServiceActive}>
                            <div className='serviceImage main-img'><img className='serviceImg' src={serviceImg4} /></div>
                            <div className='serviceImage display-none hover-img'><img className='serviceImg' src={serviceImgHover3} /></div>
                            <h3>UI Design</h3>

                            <img className=' serviceBall1 display-none' src={serviceBall1} />
                            <img className=' serviceBall2 display-none' src={serviceBall2} />
                            <img className=' serviceBall3 display-none' src={serviceBall3} />
                        </div>
                        </Flip>
                        <Flip left>
                        <div className='col' onMouseOver={serviceActive} onMouseLeave={removeServiceActive}>
                            <div className='serviceImage main-img'><img className='serviceImg' src={serviceImg5} /></div>
                            <div className='serviceImage display-none hover-img'><img className='serviceImg' src={serviceImgHover2} /></div>
                            <h3>UX Design</h3>

                            <img className=' serviceBall1 display-none' src={serviceBall1} />
                            <img className=' serviceBall2 display-none' src={serviceBall2} />
                            <img className=' serviceBall3 display-none' src={serviceBall3} />
                        </div>
                        </Flip>
                        <Flip left>
                        <div className='col' onMouseOver={serviceActive} onMouseLeave={removeServiceActive}>
                            <div className='serviceImage main-img'><img className='serviceImg' src={serviceImg6} /></div>
                            <div className='serviceImage display-none hover-img'><img className='serviceImg' src={serviceImgHover4} /></div>
                            <h3>Marketing</h3>
                            
                            <img className=' serviceBall1 display-none' src={serviceBall1} />
                            <img className=' serviceBall2 display-none' src={serviceBall2} />
                            <img className=' serviceBall3 display-none' src={serviceBall3} />
                        </div>
                        </Flip>
                        <Flip left>
                        <div className='col' onMouseOver={serviceActive} onMouseOut={removeServiceActive}>
                            <div className='serviceImage main-img'><img className='serviceImg' src={serviceImg7} /></div>
                            <div className='serviceImage display-none hover-img'><img className='serviceImg' src={serviceImgHover5} /></div>
                            <h3>Photography</h3>

                            <img className=' serviceBall1 display-none' src={serviceBall1} />
                            <img className=' serviceBall2 display-none' src={serviceBall2} />
                            <img className=' serviceBall3 display-none' src={serviceBall3} />
                        </div>
                        </Flip>
                        <Flip left>
                        <div className='col' onMouseOver={serviceActive} onMouseOut={removeServiceActive}>
                            <div className='serviceImage'><img className='serviceImg' src={serviceImg8} /></div>
                            <div className='serviceImage display-none hover-img'><img className='serviceImg' src={serviceImgHover6} /></div>
                            <h3>Graphics Design</h3>

                            <img className='serviceBall serviceBall1 display-none' src={serviceBall1} />
                            <img className='serviceBall1 serviceBall2 display-none' src={serviceBall2} />
                            <img className='serviceBall1 serviceBall3 display-none' src={serviceBall3} />
                        </div>
                        </Flip>

                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Services;