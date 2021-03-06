import React, { Component } from 'react'
import axios from 'axios'

class Duties extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
            duties: []
        }
    }

    componentDidMount(){
        var queryString = 'api/v1/experiences/1/job_duties.json';
        axios.get(queryString)
            .then(response => {
                console.log(response)
                this.setState({
                    duties: response.data
                })
            })
            .catch(error => console.log(error))
    }

    render(){
        return(
            <ul>
                {this.state.duties.map(duty => {
                    return(
                        <div className="duties" key={duty.id}>
                            <div className="point" ><i className="fas fa-hand-point-right"></i> {"  "}</div>
                            
                            <li>{duty.duty}</li>
                        </div>
                        
                    )
                    
                })}
            </ul>
            
        )
    }


}

export default Duties