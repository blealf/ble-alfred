import React, { Component } from 'react';


class Project extends Component{
    render(){
        return(
            <div>
                <h1 id="projects">Personal fun projects</h1>
                <div class="projects">
                    <div class="item">
                        <h3>
                            <a href="https://sfmusic.herokuapp.com" target="_blank">Project 1</a>
                        </h3>
                        <img src={require("../assets/images/main.jpg")} alt="" id="front1" />
                        <div class="project-img">
                            <img src={require("../assets/images/main.jpg")} alt="" class="big-screen" />
                            <img src={require("../assets/images/main.jpg")} alt="" class="big-screen" />
                            <img src={require("../assets/images/main.jpg")} alt="" class="big-screen" />
                            <img src={require("../assets/images/main.jpg")} alt="" class="big-screen" />
                        </div>
                    </div>

                    <div class="item">
                        <h3>
                            <a href="https://sfrecordss.herokuapp.com" target="_blank">Project 2</a>
                        </h3>
                        <img src={require("../assets/images/musicfront.PNG")} alt="" id="front2" />
                        <div class="project-img">
                            <img src={require("../assets/images/musicpiano.PNG")} alt="" class="big-screen2" id="n1" />
                            <img src={require("../assets/images/musicchord.PNG")} alt="" class="big-screen2" />
                            <img src={require("../assets/images/musicsax.PNG")} alt=""
                                class="big-screen2" />
                            <img src={require("../assets/images/musictrumpet.PNG")} alt="" class="big-screen2" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;