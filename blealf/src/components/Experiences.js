import React, {Component} from 'react'
import axios from 'axios'
import Experience from './Experience';

class Experiences extends Component{
    constructor(props){
        super(props)
        this.state = {
            experiences: []
        }
       
    }

    componentDidMount(){
        axios.get('api/v1/experiences.json')
            .then(response => {
                console.log(response)
                this.setState({
                    experiences: response.data
                })
            })
            .catch(error => console.log(error))
        
    }

    render(){
        return(
            <div>
                <h1 id="experience">Experience</h1>
                <div className="resume">
                    {this.state.experiences.map( experience => {
                        return(
                            <Experience experience={experience} key={experience.id} />
                            
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Experiences;