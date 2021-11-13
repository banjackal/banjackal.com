import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {Home} from './Components/Home';
import { NavMenu } from './Components/NavMenu';
import {About} from './Components/About';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavMenu />
      </Router>
      <Route path="/" component={Home} />
          <Route path="/about" component={About} />
    </React.Fragment>
    

)

}

export default App;
