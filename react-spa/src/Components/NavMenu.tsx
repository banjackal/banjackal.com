import {Component} from 'react';
import squirrel from '../assets/squirrel.jpg'
import './NavMenu.css';
import {
    Nav,
    NavLink,
    NavMenu,
  } from './NavbarElements';

export class NavigationMenu extends Component{
    render() {
        return(
                <Nav >
                    <img src={squirrel} alt="Squirrel" className="header-image"/>
                        <span className="pt-15">banjackal.com</span>
                        <NavMenu>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                        </NavMenu>
                </Nav>
        )
    }
}