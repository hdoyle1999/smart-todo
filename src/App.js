import React from 'react';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Calendar from './Calendar';
import Blogs from './Blogs';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />    
        {/* Content below will display from the resepctive react components */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calender">
              <Calendar />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
          </Switch>
          
        </div>
      </Router>
      
      
    </div>
  );
}

export default App;
