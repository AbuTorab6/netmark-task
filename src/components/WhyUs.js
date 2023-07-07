import React,{Fragment} from 'react';


import whyUs1 from '../asset/image/whyUs1.png';
import whyUs2 from '../asset/image/whyUs2.png';
import whyUs3 from '../asset/image/whyUs3.png';

import Fade from 'react-reveal/Fade';

const WhyUs = () => {
    return (
        <Fragment>
            <section className='whyUs-section'>
                <div className='row'>
                    <Fade bottom><h2>Why Us ?</h2></Fade>
                    <Fade bottom><p className='whyUs-des'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo
                        piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri
                        chard McClintock, a Latin profes.
                    </p></Fade>
                    <div className='whyUs-grid'>
                        <div className='col'> 
                            <Fade bottom><div className='whyUs-image'><img className='whyUs-img' src={whyUs1} /></div></Fade>
                            <Fade bottom><h3>Great Experience</h3></Fade>
                            <Fade bottom><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roopiece of classical Latin liter ature from 45 BC, making it over 2000 years old. Ri chard McClintock, a Latin profes</p></Fade>
                        </div>
                        <div className='col'> 
                            <Fade bottom><div className='whyUs-image'><img className='whyUs-img' src={whyUs2} /></div></Fade>
                            <Fade bottom><h3>Dedicated Team</h3></Fade>
                            <Fade bottom><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roopiece of classical Latin liter ature from 45 BC, making it over 2000 years old. Ri chard McClintock, a Latin profes</p></Fade>
                        </div>
                        <div className='col'> 
                            <Fade bottom><div className='whyUs-image'><img className='whyUs-img' src={whyUs3} /></div></Fade>
                            <Fade bottom><h3>Flexible Pricing</h3></Fade>
                            <Fade bottom><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roopiece of classical Latin liter ature from 45 BC, making it over 2000 years old. Ri chard McClintock, a Latin profes</p></Fade>
                        </div>
                    </div>
                    
                </div>
            </section>
        </Fragment>
    );
};

export default WhyUs;