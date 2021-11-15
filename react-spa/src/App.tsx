import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { NavigationMenu } from './Components/NavMenu';
import {Links} from './Components/Links'
import {Home} from './Components/Home';
import {About} from './Components/About';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationMenu />
        <div className="container-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>  
        </Routes>
        </div>
        <Links />
      </Router>
      
    </React.Fragment>
    

)

}

export default App;
