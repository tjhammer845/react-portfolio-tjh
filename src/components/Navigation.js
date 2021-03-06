import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ToggleBrand from "./ToggleBrand";


function Navigation(props) {
    return (
        <Navbar className='sticky-inner bg-white border-bottom' expand='lg'>
            <Navbar.Brand className='font-weight-bold'>
                <ToggleBrand {...props} />
            </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                    <Link className='nav-link text-uppercase p-0' to='/'>Home</Link>
                    <Link className='nav-link text-uppercase p-0 pl-lg-5' to='/about'>About</Link>
                    <Link className='nav-link text-uppercase p-0 pl-lg-5' to='/workflow'>Workflow</Link>
                    <Link className='nav-link text-uppercase p-0 pl-lg-5' to='/contact'>Let&rsquo;s Chat</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;