import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/style.css'
import './assets/javascript/main'
import './assets/fontawesome/js/all.js'

import Nav from './components/nav'
import Top from './components/top'
import About from './components/about'
import Education from './components/education'
import Experience from './components/experience'
import Skill from './components/skill'
import Project from './components/project'
import Contact from './components/contact'
import Footer from './components/footer'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Top />
        <About />
        <Education />
        <Experience />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
