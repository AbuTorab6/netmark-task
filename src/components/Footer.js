import React,{Fragment} from 'react';

import footerLogo from '../asset/image/footerLogo.png'
import apple from '../asset/image/apple.png'
import googleFooter from '../asset/image/googleFooter.png'
import linkedin from '../asset/image/linkedin.png'
import twitter from '../asset/image/twitter.png'
import facebook from '../asset/image/facebook.png'

import {NavLink,Link} from 'react-router-dom'

const Footer = () => {
    return (
        <Fragment>
            <section className='footer-section'>
                <div className='row'>
                <div><img className='footerLogo' src={footerLogo} /></div>
                    <div className='footer-grid'>
                        <div className='col'>
                        <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do.Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed doLorem ipsum dolor sit amet, consectetur adip iscing elit, sed doLorem ipsum dolor sit amet, consectetur adip iscing elit, sed doLorem ipsum dolor sit amet, consectetur adip iscing elit, sed do</p>
                            
                        </div>
                        <div>
                            <h3>Pages</h3>
                            <p> <Link className='footer-link' >Our Company</Link></p>
                            <p> <Link className='footer-link' >Career</Link></p>
                            <p> <Link className='footer-link' >Investor Relations</Link></p>
                            <p> <Link className='footer-link' >Social Impact</Link></p>
                        </div>
                        <div>
                            <h3>Resources</h3>
                            <p><Link className='footer-link' >Contact</Link></p>
                            <p > <Link className='footer-link' >Give Feedback</Link></p>
                            <p> Hello@example.com</p>

                            <div className='socila-link'>
                                <h4>Follow us</h4>
                                <a href="#"><img className='linkedin' src={linkedin} /></a>
                                <a href="#"><img className='twitter' src={twitter} /></a>
                                <a href="#"><img className='facebook' src={facebook} /></a>
                            </div>
                        </div>
                        <div>
                            <h3>Contact Us</h3>
                            <p>Phone: +8801767643562 </p>
                            <p>Email: turis@gmail.com</p>
                            {/* <p>Bolomu All Rights Reserved, 2021</p> */}
                            <div>
                                <input className='footer-input' type='text' placeholder='Email Address'/> <button className='footerBtn'> <a className='text-none-white' href="#"> Submit</a></button>
                            </div>
                            <div><img className='apple' src={apple} /></div>
                            <div><img className='googleFooter' src={googleFooter} /></div>
                             
                        </div>
                    </div>
                </div>
            </section  >

            <section className='footer-bottom-section'>
                <p>Copyright © {(new Date().getFullYear())} Solutya. All rights reserved.</p>
            </section>
        </Fragment>
    );
};

export default Footer;