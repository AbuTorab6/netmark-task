import React,{Fragment,useState,useEffect} from 'react';



import {Navbar,Nav,Container} from 'react-bootstrap'
import {NavLink,Link} from 'react-router-dom'


import { AiOutlineHome } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { AiOutlineFolderOpen,AiOutlinePushpin } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";


import navLogo from '../asset/image/navLogo.png'

const Navigation = () => 
{

    const[v1,v2]=useState({
        navigationBackground:"navigation-background",
        navigationBrand : "navigation-brand",
        navigationList : "navigation-list"
    });

    var jubo = ()=>
    {
        if(window.scrollY>100)
        {
            v2({navigationBackground:"navigation-background-scroll",navigationBrand : "navigation-brand", navigationList : "navigation-list"});
        }
        else if(window.scrollY<100)
        {
            v2({navigationBackground:"navigation-background",navigationBrand : "navigation-brand", navigationList : "navigation-list"});
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',jubo);
    });






    return (
        <Fragment>
            
            <Navbar className={v1.navigationBackground}  fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand > <NavLink className={v1.navigationBrand} to="/" ><img className='navLogo' src={navLogo} /></NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(101, 122, 254)':undefined}}} to="/"  end><span className='navigation-icon'></span>Home</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(101, 122, 254)':undefined}}} to="/about"><span className='navigation-icon'></span>About</NavLink>
                            <NavLink className={'services-dropdown '+v1.navigationList}   > PAGES
                                <div className='services-dropdown-content'>
                                        <p><Link className='drpdown-link' to="/teamDetail">Team Details</Link> </p>
                                        <p><Link className='drpdown-link' to="/courseDetail">Course Details</Link></p>
                                </div>
                            </NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(101, 122, 254)':undefined}}} to="/course"><span className='navigation-icon'></span>Course</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(101, 122, 254)':undefined}}} to="/team"><span className='navigation-icon'></span>Team</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(101, 122, 254)':undefined}}} to="/contact"><span className='navigation-icon'></span>Contact</NavLink>

                           
                            <div className='nav-right'>
                                <button className='nav-log-in'><a className='text-none-blue' href="#">Login</a></button>
                                <button className='nav-sign-up'><a className='text-none-white' href="#">Sign Up</a></button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Navigation;