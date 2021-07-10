import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bodyfit from './components/Body/Bodyfit';
import Brainfit from './components/Brain/Brainfit';
import Info from './components/Info/Info';
import Login from './components/login';
import Logout from './components/logout';
import Feedback from './components/feedback';
import Signup from './components/signup';
import Verified from './components/verified';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Bodyfit/>
      <Brainfit/>
      <Info/>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/logout'>
        <Logout/>
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route exact path='/livechat'>
        <Contact/>
      </Route>
      <Route exaxt path='/feedback'>
        <Feedback/>
      </Route>
      <Route exact path='/verified'>
        <Verified/>
      </Route>
    </>
  )
};

export default App;