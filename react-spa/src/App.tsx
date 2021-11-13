import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import {Home} from './Components/Home';
import { NavMenu } from './Components/NavMenu';
import {About} from './Components/About';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavMenu />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>  
      </Routes>

      </Router>
      
    </React.Fragment>
    

)

}

export default App;
