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
                        <li><i className="fas fa-code"></i> Ruby on Rails</li>
                        <li><i className="fas fa-code"></i> Bootstrap</li>
                        <li><i className="fas fa-code"></i> Jquery</li>
                        <li><i className="fas fa-code"></i> PostgreSQL</li>
                    </ul>
                </div>
                <div className="seeMore">
                    <a href="https://sfmusic.herokuapp.com" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i> See More </a>
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
                        <li><i className="fas fa-code"></i> Ruby on Rails</li>
                        <li><i className="fas fa-code"></i> Bootstrap</li>
                        <li><i className="fas fa-code"></i> Jquery</li>
                        <li><i className="fas fa-code"></i> PostgreSQL</li>
                    </ul>
                </div>
                <div className="seeMore">
                    <a href="https://sfrecords.herokuapp.com" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i> See More </a>
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
                        <li><i className="fas fa-code"></i> Ruby on Rails</li>
                        <li><i className="fas fa-code"></i> Solr search</li>
                        <li><i className="fas fa-code"></i> Postgresql</li>
                    </ul>
                </div>
                <div className="seeMore">
                    <a href="https://github.com/blealf/ProjectSearch" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i> See More </a>
                </div>
            </div>

            
            <div className="projectItem">
                <div className="projectItemHeader">
                    <h3>Chester Web Desktop Prototype</h3>
                </div>
                <div className="projectItemImage">
                    <img src={require("../assets/images/chester.png")} alt="" />
                </div>
                <div className="projectItemDescription">
                    <ul>
                        <li> Developed using: </li>
                        <li><i className="fas fa-code"></i> HTML</li>
                        <li><i className="fas fa-code"></i> CSS</li>
                        <li><i className="fas fa-code"></i> </li>                        </ul>
                </div>
                <div className="seeMore">
                    <a href="http://chester-desktop.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i> See More </a>
                </div>
            </div>
            <div className="projectItem">
                <div className="projectItemHeader">
                    <h3>My Portfolio</h3>
                </div>
                <div className="projectItemImage">
                    <img src={require("../assets/images/myportfolio.png")} alt="" />
                </div>
                <div className="projectItemDescription">
                    <ul>
                        <li> Developed using: </li>
                        <li><i className="fas fa-code"></i> Ruby on Rails</li>
                        <li><i className="fas fa-code"></i> React JS</li>
                        <li><i className="fas fa-code"></i> PostgreSQL</li>                        </ul>
                </div>
                <div className="seeMore">
                    <button> <i className="fas fa-link"></i> See More </button>
                </div>
            </div>
        </div>
        <hr/>
    </div>



export default Projects