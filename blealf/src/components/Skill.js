import React, {Component} from 'react'
import axios from 'axios'

class Skill extends Component{
    constructor(props){
        super(props)
        this.state = {
            skills: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/api/v1/skills.json')
            .then(response => {
                console.log(response)
                this.setState({
                    skills: response.data
                })
            })
            .catch(error => console.log(error))
    }
    render(){
        return(
            <div>
                <div id="space"></div>
                <h1 id="skills"> Skills</h1>
                <div className="skills">
                    {this.state.skills.map(skill => {
                        return(
                            <div key={skill.id}>{skill.skill}</div>
                        )
                    })}
                    {/* <div>Ruby on Rails</div>
                    <div>HTML5</div>
                    <div>CSS3</div>
                    <div>JavaScript</div>
                    <div>Python</div>
                    <div>Git</div> */}
                </div>
            </div>
        )
    }
}

export default Skill;