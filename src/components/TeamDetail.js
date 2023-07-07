import React,{Fragment} from 'react';

import team1 from '../asset/image/team1.png'

import { FiFacebook,FiInstagram,FiLinkedin } from "react-icons/fi";

import Fade from 'react-reveal/Fade';

const TeamDetail = () => {
    return (
        <Fragment>
            <section className='team-detail-section'>
                <div className='row'>
                    <div className='team-detail-grid'>
                        <Fade left>
                        <div className='col'>
                            <div className='teamIDetailmage'><img className='teamIDetailImg' src={team1} /></div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className='col right'>
                            <h3>Pushpa Kanon</h3>
                            <p className='team-detail-des'>Web Developer</p>
                            <div className='team-detail-inner-grid'>
                                <p className='marks'>Position:</p>
                                <p >BroadBand</p>
                                <p className='marks'>Practice Area:</p>
                                <p>Family Loyer</p>
                                <p className='marks'>Experiance:</p>
                                <p>12 year</p>
                                <p className='marks'>Address:</p>
                                <p>Millington, Ave</p>
                                <p className='marks'>Phone:</p>
                                <p>01755006336</p>
                                <p className='marks'>Email:</p>
                                <p>abc@gmail.com</p>
                                <p className='marks'>Website:</p>
                                <p>abcsu.com</p>
                                <p className='marks'>Fax:</p>
                                <p>565 434 56</p>
                                <p className='marks'>Follow me:</p>
                                <p>
                                    <a className='TeamDetail-icon ' href="#"><FiFacebook/></a>
                                    <a className='TeamDetail-icon ml' href="#"><FiInstagram/></a>
                                    <a className='TeamDetail-icon ml' href="#"><FiLinkedin/></a>
                                </p>

                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default TeamDetail;