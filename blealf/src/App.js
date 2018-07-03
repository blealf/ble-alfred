import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/style.css'
import './assets/javascript/main'
import './assets/fontawesome/js/all.js'

import Nav from './components/Nav'
import Top from './components/Top'
import About from './components/About'
import Education from './components/Educations'
import Experience from './components/Experiences'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'


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
