import React,{Fragment} from 'react';

import ourMission from '../asset/image/ourMission.png'


import Fade from 'react-reveal/Fade';

const OurMission = () => {
    return (
        <Fragment>
            <section className='ourMission-Section'>
                <div className='row'>
                    <div className='ourMission-grid'>
                        <Fade left>
                        <div className='col'>
                            <h4>Our Mission</h4>
                            <h2>Build Better For Best Economy</h2>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roopiece of classical Latin literature from 45 BC, making it over 2000 years old. Rchard McClintock, a Lati.Contrary to popular belief, Lorem Ipsum is not simply piece of classical Latin</p> <br/>

                            <p>literature from 45 BC, making it over 2000 years old. Ri chard McClintock, a Latin professor at Hampden-Sydney College in Virginia, l ooked up one of the more obscure Latin words, consectetur, from a Lorem Ips um passage, and going through the cites of the word in classical literature, di scovered the undoubtable source</p>

                            <button><a className='text-none-white' href="#"> Join Our Team</a></button>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className='col'>
                            <div className='ourMissionImage'>
                                <img className='ourMissionImg' src={ourMission} />
                                <div className='ourMissionDesig'>
                                    <h3 >MST: Alonker Ion</h3>
                                    <p>CEO,Education LTD</p>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default OurMission;