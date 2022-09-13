import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Messages from './Messages';
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route> 
        <Route path="/signup">
          <Signup />
        </Route> 
        <Route path="/messages">
          <Messages />
        </Route> 
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;