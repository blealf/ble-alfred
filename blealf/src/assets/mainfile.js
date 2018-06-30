
//https://use.fontawesome.com/releases/v5.0.13/js/all.js
import React from 'react';
import './fontawesome/js/all.js'

const Main = () => 
<div className="main-body">
    <nav>
        <div id="logo">
            <div><h2>Blessing Alfred</h2></div>
            <div>
                <button id="menu-btn" >
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>

        <ul id="nav-wrapper" class="wrapper">
            <li class="nav-links">
                <a href="#">Home</a>
            </li>
            <li class="nav-links">
                <a href="#">Resume</a>
            </li>
            <li class="nav-links">
                <a href="#">About</a>
            </li>
            <li class="nav-links">
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
    <div class="top">
        <div class="bounding-box">
            <div class="sets"><img src={require("./me.jpg")} alt=""/></div>
                <div class="sets">
                    <h2>Blessing Alfred</h2>
                    <h4>Phone: </h4>
                    <p>5195743928</p>
                    <h4>Email:</h4>
                    <p>blealfrails@gmail.com</p>
                    <h4>Address:</h4>
                    <p> 1536 Nairn Avenue, London, Ontario. N5V 2P2</p>
                </div>
                <div class="social">
                    <div class="social-inner-wrap">

                    </div>
                </div>
            </div>
        </div>
        <div class="about">
            <h2>About Blessing Alfred</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo aperiam tempora voluptatem. Ad aut, animi, cumque aperiam dignissimos maxime sit voluptate repellat earum quos eveniet libero quidem impedit. Sed dolorum aspernatur nobis mollitia, quisquam officiis pariatur ea perspiciatis, doloremque nemo, alias quibusdam repudiandae debitis! Quidem asperiores ipsum minima fugit?</p>
        </div>
        <h1 id="experience">Experience</h1>
        <div class="resume">
            <div class="details">
                <div class="right">
                    <h3>June 2016 - December 2016</h3>
                </div>
                <div class="left">
                    <h2> Job title </h2>
                    <h3>Company and Address</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                    </ul>
                </div>
            </div>
            <div class="details">
                <div class="right">
                    <h3>June 2016 - December 2016</h3>
                </div>
                <div class="left">
                    <h2> Job title </h2>
                    <h3>Company and Address</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                    </ul>
                </div>
            </div>
            <div class="details">
                <div class="right">
                    <h3>June 2016 - December 2016</h3>
                </div>
                <div class="left">
                    <h2> Job title </h2>
                    <h3>Company and Address</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                    </ul>
                </div>
            </div>
        </div>

        <h1 id="experience">Education</h1>
        <div class="resume">
            <div class="details">
                <div class="right">
                    <h3>June 2016 - December 2016</h3>
                </div>
                <div class="left">
                    <h2> Job title </h2>
                    <h3>Company and Address</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                    </ul>
                </div>
            </div>
            <div class="details">
                <div class="right">
                    <h3>June 2016 - December 2016</h3>
                </div>
                <div class="left">
                    <h2> Job title </h2>
                    <h3>Company and Address</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                    </ul>
                </div>
            </div>
            <div class="details">
                <div class="right">
                    <h3>June 2016 - December 2016</h3>
                </div>
                <div class="left">
                    <h2> Job title </h2>
                    <h3>Company and Address</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, illo!</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="space"></div>
        <h1 id="skills"> Skills</h1>
        <div class="skills">

            <div>Ruby on Rails</div>
            <div>HTML5</div>
            <div>CSS3</div>
            <div>JavaScript</div>
            <div>Python</div>
        </div>

        <h1 id="projects">Personal fun projects</h1>
        <div class="projects">
            <div class="item">
                <h3>
                <a href="https://sfmusic.herokuapp.com" target="_blank">Project 1</a>
                </h3>
                <img src={require("./main.jpg")} alt="" id="front1"/>
                <div class="project-img">
                    <img src={require("./main.jpg")} alt="" class="big-screen"/>
                    <img src={require("./main.jpg")} alt="" class="big-screen"/>
                    <img src={require("./main.jpg")} alt="" class="big-screen"/>
                    <img src={require("./main.jpg")} alt="" class="big-screen"/>
                </div>
            </div>

            <div class="item">
               <h3>
                    <a href="https://sfrecordss.herokuapp.com" target="_blank">Project 2</a>
                </h3>
                <img src={require("./musicfront.PNG")} alt="" id="front2"/>
                <div class="project-img">
                    <img src={require("./musicpiano.PNG")} alt="" class="big-screen2" id="n1"/>
                        <img src={require("./musicchord.PNG")} alt="" class="big-screen2"/>
                        <img src={require("./musicsax.PNG")} alt=""
                    class="big-screen2"/>
                    <img src={require("./musictrumpet.PNG")} alt="" class="big-screen2"/>
                </div>
            </div>
        </div>

    <h1 id="contact">Contact</h1>
    <div class="contact">

        <div class="form">
            <div class="form-group">
                <label for="">Name:</label>
                <input type="text" name="" id="" />
            </div>

            <div class="form-group">
                <label for="">Email:</label>
                <input type="email" name="" id="" />
            </div>

            <div class="form-group">
                <label for="">Phone:</label>
                <input type="text" name="" id="" />
            </div>

            <div class="form-group message">
                <label for="">Message:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="social">
            <div class="social-inner-wrap">
                <a href="#">
                    <i class="f1 fab fa-instagram"></i>
                </a>
                <a href="#">
                    <i class="f2 fab fa-google-plus-g"></i>
                </a>
                <a href="#">
                    <i class="f3 fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i class="f4 fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
        <div>
            <p> &copy 2018 By Blessing Alfred</p>
        </div>
    </div>
</div>

export default Main;