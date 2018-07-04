import React from 'react';
import '../assets/css/projects.css';


const Projects = () =>
    <div className="myProjects">
        <hr/>
        <h1> My Projects </h1>

        <div className="itemGrid">
            <div className="projectItem">
                <div className="projectItemHeader">
                    <h3>Music Web App</h3>
                </div>
                <div className="projectItemImage">
                    <img src={require("../assets/images/sfmusic.png")} alt="" />
                </div>
                <div className="projectItemDescription">
                    <ul>
                        <li> Developed using: </li>
                        <li><i class="fas fa-code"></i> Ruby on Rails</li>
                        <li><i class="fas fa-code"></i> Bootstrap</li>
                        <li><i class="fas fa-code"></i> Jquery</li>
                        <li><i class="fas fa-code"></i> PostgreSQL</li>
                    </ul>
                </div>
                <div className="seeMore">
                    <a href="https://sfmusic.herokuapp.com" target="_blank" rel="noopener noreferrer"> <i class="fas fa-link"></i> See More </a>
                </div>
            </div>

            
            <div className="projectItem">
                <div className="projectItemHeader">
                    <h3> Simple Record Web App </h3>
                </div>
                <div className="projectItemImage">
                    <img src={require("../assets/images/sfrecords.png")} alt="" />
                </div>
                <div className="projectItemDescription">
                    <ul>
                        <li> Developed using: </li>
                        <li><i class="fas fa-code"></i> Ruby on Rails</li>
                        <li><i class="fas fa-code"></i> Bootstrap</li>
                        <li><i class="fas fa-code"></i> Jquery</li>
                        <li><i class="fas fa-code"></i> PostgreSQL</li>
                    </ul>
                </div>
                <div className="seeMore">
                    <a href="https://sfrecords.herokuapp.com" target="_blank" rel="noopener noreferrer"> <i class="fas fa-link"></i> See More </a>
                </div>
            </div>

           
            <div className="projectItem">
                <div className="projectItemHeader">
                    <h3>MSc Project Recommendation App</h3>
                </div>
                <div className="projectItemImage">
                    <img src={require("../assets/images/projectsearch.png")} alt="" />
                </div>
                <div className="projectItemDescription">
                    <ul>
                        <li> Developed using: </li>
                        <li><i class="fas fa-code"></i> Ruby on Rails</li>
                        <li><i class="fas fa-code"></i> Solr search</li>
                        <li><i class="fas fa-code"></i> Postgresql</li>
                    </ul>
                </div>
                <div className="seeMore">
                    <a href="https://github.com/blealf/ProjectSearch" target="_blank" rel="noopener noreferrer"> <i class="fas fa-link"></i> See More </a>
                </div>
            </div>

            
            <div className="projectItem">
                <div className="projectItemHeader">
                    <h3>My Portfolio</h3>
                </div>
                <div className="projectItemImage">
                    <img src={require("../assets/images/main.jpg")} alt="" />
                </div>
                <div className="projectItemDescription">
                    <ul>
                        <li> Developed using: </li>
                        <li><i class="fas fa-code"></i> Ruby on Rails</li>
                        <li><i class="fas fa-code"></i> React JS</li>
                        <li><i class="fas fa-code"></i> PostgreSQL</li>                        </ul>
                </div>
                <div className="seeMore">
                    <a href="#"> <i class="fas fa-link"></i> See More </a>
                </div>
            </div>
        </div>
        <hr/>
    </div>



export default Projects