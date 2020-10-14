import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Tom Hammer',
            headerLinks: [
                { title: 'Home', path: '/react-portfolio-tjh' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' }
            ],
            home: {
                title: 'Be Relentless',
                subTitle: 'Projects the make a difference',
                text: 'Checkout some of my work below'
            },
            about: {
                title: 'About Tom'
            },
            contact: {
                title: 'Let\'s Chat'
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>

                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand>Tom Hammer</Navbar.Brand>

                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/react-portfolio-tjh">Home</Link>
                                <Link className="nav-link" to="/about">About Tom</Link>
                                <Link className="nav-link" to="/contact">Let&rsquo;s Chat</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route path="/react-portfolio-tjh" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

                    <Footer />

                </Container>
            </Router>
        );
    }
}

export default App;
