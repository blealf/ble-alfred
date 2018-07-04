import React, { Component } from 'react';


class Project extends Component{
    render(){
        return(
            <div>
                <h1 id="projects">Personal fun projects</h1>
                <div className="projects">
                    <div className="item">
                        <h3>
                            <a href="https://sfmusic.herokuapp.com" target="_blank" rel="noopener noreferrer">Project 1</a>
                        </h3>
                        <img src={require("../assets/images/main.jpg")} alt="" id="front1" />
                        <div className="project-img">
                            <img src={require("../assets/images/main.jpg")} alt="" className="big-screen" />
                            <img src={require("../assets/images/main.jpg")} alt="" className="big-screen" />
                            <img src={require("../assets/images/main.jpg")} alt="" className="big-screen" />
                            <img src={require("../assets/images/main.jpg")} alt="" className="big-screen" />
                        </div>
                    </div>

                    <div className="item">
                        <h3>
                            <a href="https://sfrecordss.herokuapp.com" target="_blank" rel="noopener noreferrer">Project 2</a>
                        </h3>
                        <img src={require("../assets/images/musicfront.PNG")} alt="" id="front2" />
                        <div className="project-img">
                            <img src={require("../assets/images/musicpiano.PNG")} alt="" className="big-screen2" id="n1" />
                            <img src={require("../assets/images/musicchord.PNG")} alt="" className="big-screen2" />
                            <img src={require("../assets/images/musicsax.PNG")} alt=""
                                className="big-screen2" />
                            <img src={require("../assets/images/musictrumpet.PNG")} alt="" className="big-screen2" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;