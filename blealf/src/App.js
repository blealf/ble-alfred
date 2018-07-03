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
  constructor(props){
    super(props)
    this.state = {
      navig: "1"
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({navig: e.target.id})
    console.log(e.target.id)
  }

  render() {
    let whichShow;
    if(this.state.navig === "1"){
      whichShow = (
        <div>
          <Top />
          <About />
          <Education />
          <Experience />
          <Skill />
          <Project />
          <Contact />
        </div>
      )
    } else if (this.state.navig === "2") {
      whichShow = (
        <div>
          <About />
          <Education />
          <Experience />
          <Skill />
        </div>
      )
    } else if (this.state.navig === "3") {
      whichShow = (
        <div>
          <Project />
        </div>
      )
    }else if (this.state.navig === "4"){
      whichShow = (
        <Contact />
      )
    }
    return (
      <div className="App">
        <div>
          <nav>
            <div id="logo">
              <div><h2>Blessing Alfred</h2></div>
              <div>
                <button id="menu-btn" >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>

            <ul id="nav-wrapper" className="wrapper">
              <li className="nav-links">
                <a href="#" id="1" onClick={this.handleClick}>Home</a>
              </li>
              <li className="nav-links">
                <a href="#" id="2" onClick={this.handleClick}>Resume</a>
              </li>
              <li className="nav-links">
                <a href="#" id="3" onClick={this.handleClick}>Projects</a>
              </li>
              <li className="nav-links" >
                <a href="#" id="4" onClick={this.handleClick}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        {whichShow}
        <Footer />
      </div>
    );
  }
}

export default App;
