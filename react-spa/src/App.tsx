import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import NavMenu from './Components/NavMenu';
import Links from './Components/Links'
import Home from './Components/Home';
import About from './Components/About';

export default function App() {
    return (
        <React.Fragment>
            <Router>
                <NavMenu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
                <Links/>
            </Router>
        </React.Fragment>
    )
}