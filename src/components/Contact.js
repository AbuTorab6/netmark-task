import React,{Fragment} from 'react';

import contact from '../asset/image/contact.png'
import address from '../asset/image/address.png'
import phone from '../asset/image/phone.png'
import calander from '../asset/image/calander.png'

const Contact = () => {
    return (
        <Fragment>
            <section className='contact-section'>
                <div className='row'>
                    <h4>Contact Us</h4>
                    <h2>Our Company Contact Now</h2>

                    <div className='contact-grid'>
                        <div className='col'>
                            <h3>Get In Touch With Us</h3>
                            <p className='contact-des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>

                            <div className='contact-inner-grid'>
                                <div className='inner-col'>
                                    <div className='contactInnerImage'><img className='contactInnerImg' src={address} /></div>
                                </div>
                                <div className='inner-col'>
                                    <h5>Our Address</h5>
                                    <p>2972 Westheimer Rd. Santa Ana, Illinois 8585</p>
                                </div>

                                <div className='inner-col'>
                                    <div className='contactInnerImage'><img className='contactInnerImg' src={phone} /></div>
                                </div>
                                <div className='inner-col'>
                                    <h5>Contact Information</h5>
                                    <p>Mobile: +8801755006336</p>
                                    <p>Email: juboraz727@gmail.com</p>
                                </div>

                                <div className='inner-col'>
                                    <div className='contactInnerImage'><img className='contactInnerImg' src={calander} /></div>
                                </div>
                                <div className='inner-col'>
                                    <h5>Contact Information</h5>
                                    <p>Mobile: +8801755006336</p>
                                    <p>Email: juboraz727@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='contactImage'><img className='contactImg' src={contact} /></div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;