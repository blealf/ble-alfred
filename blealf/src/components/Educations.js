import React, {Component} from 'react'
import axios from 'axios';
import Education from './Education'
//import DateFormat from 'dateformat';

class Educations extends Component{
    constructor(props){
        super(props)
        this.state = {
            educations: []
        }
    }


    componentDidMount() {
        axios.get('api/v1/educations.json')
        .then(response => {
            console.log(response)
            this.setState({
                educations: response.data
            })
        })
        .catch(error => console.log(error))
    }


    render(){
        return(
            <div>
                <h1 id="experience">Education</h1>
                <div className="resume" >
                {this.state.educations.map( education => {
                    return (
                        <Education education={education} key={education.id}/>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Educations;