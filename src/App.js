import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { Route } from 'react-router-dom';
import Skillss from './pages/Skillss';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     
     <Navbar/>
        <Route exact path ="/">
          <Home/>
          </Route>

          <Route exact path ="/project">
          <Project/>
          </Route>

          <Route exact path ="/about">
          <About/>
          </Route>

          <Route exact path ="/skills">
          <Skillss/>
          </Route>

          <Route exact path ="/contact">
          <Contact/>
          </Route>

    </>
  );
}

export default App;
