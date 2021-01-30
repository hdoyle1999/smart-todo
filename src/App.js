import React from 'react';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Calendar from './Calendar';
import Blogs from './Blogs';
import ToDo from './ToDo';
import CreateToDo from './CreateToDo';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <Navbar />  
              <ToDo />
            </Route>
            <Route path="/calender">
              <Navbar />  
              <Calendar />
            </Route>
            <Route path="/blogs">
              <Navbar />  
              <Blogs />
            </Route>
            <Route path="/createToDo">
              <Navbar />  
              <CreateToDo />
            </Route>
          </Switch>
          
        </div>
      </Router>
      
      
    </div>
  );
}

export default App;
