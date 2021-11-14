import React, {Component} from 'react';
import { Nav, NavItem, Navbar, Container} from 'react-bootstrap';
import squirrel from '../assets/squirrel.jpg'
import './NavMenu.css';

export class NavMenu extends Component{
    render() {
        return(
                <Navbar bg="light" expand="lg">
                    <Container>
                    <img src={squirrel} alt="Squirrel" className="header-image"/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand className="align-text-center">
                        banjackal.com
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
        )
    }
}