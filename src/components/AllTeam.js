import React,{Fragment} from 'react';

import team1 from '../asset/image/team1.png'
import team2 from '../asset/image/team22.png'
import team3 from '../asset/image/team33.png'
import team4 from '../asset/image/team44.png'
import {Link} from 'react-router-dom'


import { FiFacebook,FiInstagram,FiLinkedin } from "react-icons/fi";


import Fade from 'react-reveal/Fade';
const AllTeam = () => {
    return (
        <Fragment>
            <section className='team-section'>
                <div className='row'>
                    <Fade left><h4>Team Member</h4></Fade>
                    <Fade left><h2>Popular Professional  <br/> Teachers</h2></Fade>

                    
                    <div className='Allteam-grid'>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team1} /></div>
                            <div className='Allteam-overlay'>
                                <h3 className='member-name'><Link to="/teamDetail" className='courseLinkCol'>Pushpa Kanon</Link></h3>
                                <p className='member-des'>CEO, derhab</p>
                                <div className='allTeam-icon-box'>
                                    <ul>
                                        <li><a className='allTeam-icon' href="#"><FiFacebook/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiInstagram/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team2} /></div>
                            <div className='Allteam-overlay'>
                                <h3 className='member-name'><Link to="/teamDetail" className='courseLinkCol'>Pushpa Kanon</Link></h3>
                                <p className='member-des'>CEO, derhab</p>
                                <div className='allTeam-icon-box'>
                                    <ul>
                                        <li><a className='allTeam-icon' href="#"><FiFacebook/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiInstagram/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team3} /></div>
                            <div className='Allteam-overlay'>
                                <h3 className='member-name'><Link to="/teamDetail" className='courseLinkCol'>Pushpa Kanon</Link></h3>
                                <p className='member-des'>CEO, derhab</p>
                                <div className='allTeam-icon-box'>
                                    <ul>
                                        <li><a className='allTeam-icon' href="#"><FiFacebook/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiInstagram/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team4} /></div>
                            <div className='Allteam-overlay'>
                                <h3 className='member-name'><Link to="/teamDetail" className='courseLinkCol'>Pushpa Kanon</Link></h3>
                                <p className='member-des'>CEO, derhab</p>
                                <div className='allTeam-icon-box'>
                                    <ul>
                                        <li><a className='allTeam-icon' href="#"><FiFacebook/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiInstagram/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team1} /></div>
                            <div className='Allteam-overlay'>
                                <h3 className='member-name'><Link to="/teamDetail" className='courseLinkCol'>Pushpa Kanon</Link></h3>
                                <p className='member-des'>CEO, derhab</p>
                                <div className='allTeam-icon-box'>
                                    <ul>
                                        <li><a className='allTeam-icon' href="#"><FiFacebook/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiInstagram/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team2} /></div>
                            <div className='Allteam-overlay'>
                                <h3 className='member-name'><Link to="/teamDetail" className='courseLinkCol'>Pushpa Kanon</Link></h3>
                                <p className='member-des'>CEO, derhab</p>
                                <div className='allTeam-icon-box'>
                                    <ul>
                                        <li><a className='allTeam-icon' href="#"><FiFacebook/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiInstagram/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team3} /></div>
                            <div className='Allteam-overlay'>
                                <h3 className='member-name'><Link to="/teamDetail" className='courseLinkCol'>Pushpa Kanon</Link></h3>
                                <p className='member-des'>CEO, derhab</p>
                                <div className='allTeam-icon-box'>
                                    <ul>
                                        <li><a className='allTeam-icon' href="#"><FiFacebook/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiInstagram/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='teamImage'><img className='teamImg' src={team4} /></div>
                            <div className='Allteam-overlay'>
                                <h3 className='member-name'><Link to="/teamDetail" className='courseLinkCol'>Pushpa Kanon</Link></h3>
                                <p className='member-des'>CEO, derhab</p>
                                <div className='allTeam-icon-box'>
                                    <ul>
                                        <li><a className='allTeam-icon' href="#"><FiFacebook/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiInstagram/></a></li>
                                        <li><a className='allTeam-icon' href="#"><FiLinkedin/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </Fragment>
    );
};

export default AllTeam;