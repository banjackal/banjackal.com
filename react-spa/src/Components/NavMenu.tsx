import {Component} from 'react';
import squirrel from '../assets/squirrel.jpg';
import './NavMenu.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export class NavigationMenu extends Component{
    render() {
        return(
                <Navbar>
                    <NavbarBrand>
                    <img src={squirrel} alt="Squirrel" className="brand brand-image"/>
                        <span className="brand brand-name">banjackal.com</span>
                    </NavbarBrand>
                    <NavbarCollapse>
                        <Nav>
                        <NavItem>
                                <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/about">About</NavLink>
                        </NavItem></Nav>
                        </NavbarCollapse>
                </Navbar>
        )
    }
}