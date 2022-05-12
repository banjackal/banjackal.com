import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import squirrel from '../assets/squirrel.jpg'
import './NavMenu.css';

export default function NavMenu() {
    return (
        <header>
            <Navbar
                className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"
            >
                <div>
                    <img src={squirrel} alt="Squirrel" className="header-image"/>
                    <Navbar.Brand>banjackal.com</Navbar.Brand>
                    <Navbar.Collapse

                    >
                        <Nav className="align-right">
                            <Nav.Item
                            >
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    )
}