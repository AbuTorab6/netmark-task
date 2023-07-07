import React,{Fragment,useEffect,useRef} from 'react';

const SkillBar = () => 
{

    var myRef = useRef();
    // var onScroll = ()=>
    // {
    //     if(window.location.pathname=="/teamDetail")
    //     {
    //         if(window.scrollY>1028)
    //         {
    //             console.log(window.scrollY)
    //             document.querySelector('.skill-per1').classList.add('skill-poacity')
    //             document.querySelector('.skill-per2').classList.add('skill-poacity')
    //             document.querySelector('.skill-per3').classList.add('skill-poacity')
    //             document.querySelector('.skill-per4').classList.add('skill-poacity')
    //         }
    //     }
        

    // }

    useEffect(()=>{
       
        // console.log(window.location)
        // window.addEventListener('scroll',onScroll);

        const observer = new IntersectionObserver((entries)=>{
            console.log('entry',entries[0].isIntersecting)

            if('entry',entries[0].isIntersecting)
            {
                if(window.location.pathname=="/teamDetail")
                {
                    
                        console.log(window.scrollY)
                        document.querySelector('.skill-per1').classList.add('skill-poacity')
                        document.querySelector('.skill-per2').classList.add('skill-poacity')
                        document.querySelector('.skill-per3').classList.add('skill-poacity')
                        document.querySelector('.skill-per4').classList.add('skill-poacity')
                }

            }
            else
            {
                if(window.location.pathname=="/teamDetail")
                {
                    
                        console.log(window.scrollY)
                        document.querySelector('.skill-per1').classList.remove('skill-poacity')
                        document.querySelector('.skill-per2').classList.remove('skill-poacity')
                        document.querySelector('.skill-per3').classList.remove('skill-poacity')
                        document.querySelector('.skill-per4').classList.remove('skill-poacity')
                }


            }
        })

        observer.observe(myRef.current)
    },[])



    
    return (
        <Fragment>
            <section className='skillBar-section'>
                <div className='row'>
                    <div className='skillBar-grid' ref={myRef}>
                        <div className='col'>
                        <h2>Personal Skill</h2>
                            <div className='skillBar-container  ' ref={myRef}>

                                <div className='skill-box'>
                                    <span className='skill-title'>Productivity</span>
                                    <div className='skill-bar'>
                                        <span className='skill-per skill-per1 Productivity'>
                                            <span className='skill-tooltip'>90%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className='skill-box'>
                                    <span className='skill-title'>Digital Marketing</span>
                                    <div className='skill-bar'>
                                        <span className='skill-per skill-per2 digiMarket'>
                                            <span className='skill-tooltip'>85%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className='skill-box'>
                                    <span className='skill-title'>Technology</span>
                                    <div className='skill-bar'>
                                        <span className='skill-per skill-per3 technology'>
                                            <span className='skill-tooltip'>65%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className='skill-box'>
                                    <span className='skill-title'>Web Design</span>
                                    <div className='skill-bar'>
                                        <span className='skill-per skill-per4 webDesign'>
                                            <span className='skill-tooltip'>75%</span>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col'>
                            <h2>Personal Experiance</h2>
                            <p>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default SkillBar;