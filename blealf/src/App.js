import React, { Component } from 'react';
import ReactLoading from 'react-loading'
//import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import './assets/css/big-screen.css';
import './assets/javascript/main.js';
import './assets/fontawesome/js/all.js';

//import Nav from './components/Nav'
import Top from './components/Top'
import About from './components/About'
import Education from './components/Educations'
import Experience from './components/Experiences'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Projects from './components/Projects'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      navig: "1",
      loading: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    setTimeout(() => this.setState({ navig: "1", loading: false}), 2000)
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
          <Projects />
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
          <Projects />
        </div>
      )
    }else if (this.state.navig === "4"){
      whichShow = (
        <Contact />
      )
    }

    if (this.state.loading) {
      return <div>
        <div>
          <nav>
            <div id="logo">
              <div><h2 id="1" onClick={this.handleClick}>Blessing Alfred</h2></div>
              <div>
                <button id="menu-btn" >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>

            <ul id="nav-wrapper" className="wrapper ">
              <li className="nav-links">
                {/* <a href="#" id="1" onClick={this.handleClick}>Home</a> */}
                <button id="1" onClick={this.handleClick}> Home</button>
              </li>
              <li className="nav-links">
                <button id="2" onClick={this.handleClick}>Resume</button>
              </li>
              <li className="nav-links">
                <button id="3" onClick={this.handleClick}>Project</button>
              </li>
              <li className="nav-links" >
                <button id="4" onClick={this.handleClick}>Contact</button>
              </li>
            </ul>
          </nav>
        </div>
        <ReactLoading type="cylon" color="teal" height='23' width='37' />
      </div>
    } else {
    return (
      <div className="App">
        <div>
          <nav>
            <div id="logo">
              <div><h2 id="1" onClick={this.handleClick}>Blessing Alfred</h2></div>
              <div>
                <button id="menu-btn" >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>

            <ul id="nav-wrapper" className="wrapper ">
              <li className="nav-links">
                {/* <a href="#" id="1" onClick={this.handleClick}>Home</a> */}
                <button id="1" onClick={this.handleClick}> Home</button>
              </li>
              <li className="nav-links">
                <button id="2" onClick={this.handleClick}>Resume</button>
              </li>
              <li className="nav-links">
                <button id="3" onClick={this.handleClick}>Project</button>
              </li>
              <li className="nav-links" >
                <button id="4" onClick={this.handleClick}>Contact</button>
              </li>
            </ul>
          </nav>
        </div>
        {whichShow}
        <Footer />
      </div>
    );}
  }
}

export default App;
