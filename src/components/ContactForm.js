import React,{Fragment} from 'react';

const ContactForm = () => {
    return (
        <Fragment>
            <section className='contact-form-section'>
                <div className='row'>
                    <h4>Contact Us</h4>
                    <h2>Have Any Question ?</h2>
                    <h2>Let's Talk!</h2>
                    <div className=''>
                        <form className='myForm'>
                            <div className='contact-form-grid'>
                                <div className="contact-name contact-common">
                                    <label>Your Name</label>
                                    <input type="text" className='from_name'  name="from_name" placeholder='Type your name here'  />
                                </div>
                                <div className="contact-name contact-common">
                                    <label>Email Address</label>
                                    <input type="text" className='from_name'  name="from_name" placeholder='Type your email here'  />
                                </div>
                                <div className="contact-name contact-common">
                                    <label>Subject</label>
                                    <input type="text" className='from_name'  name="from_name" placeholder='Type your subject here'  />
                                </div>
                                <div className="contact-name contact-common">
                                    <label>Phone Number</label>
                                    <input type="text" className='from_name'  name="from_name" placeholder='Type your phone number here'  />
                                </div>
                            </div>
                            <div className="contact-msg contact-common">
                                <label className='textarea-lebel'>Massage ....</label>
                                <textarea className='message'  name="message" placeholder='Type your massage here ...........' />
                            </div>
                            <div>
                                <input className='checkbox' type="checkbox"/> <span>Accept <span className='red'>terms</span> and <span className='red'>privacy policy.</span></span>
                            </div>
                            <button ><a className='text-none-white' href="#"> Submit Massage</a></button>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ContactForm;