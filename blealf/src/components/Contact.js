import React, {Component} from 'react';
import axios from 'axios'


class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            status: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount(){

    // }

    // componentDidMount(){
    //     console.log(this.state)
    // }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // switch(e.target.name){
        //     case "name": this.setState({ name: e.target.value })
        //     case "email": this.setState({ email: e.target.value })
        //     case "phone": this.setState({ phone: e.target.value })
        //     case "message": this.setState({ message: e.target.value })
        // }
        // console.log(e.target.name)
        // console.log(e.target.value)
        console.log(this.state.email)
    }

   handleSubmit(e) {
        e.preventDefault()
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const contact = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message

        }
        axios.post(`api/v1/contacts`, contact, axiosConfig)
            .then(response => {
                console.log(response)
                console.log(response.data)
            })
            .catch(error => console.log(error))

       this.setState({
           name: "",
           email: "",
           phone: "",
           message: "",
           status: "message sent"
       })

       setTimeout(() => {
           this.setState({
               status: ""
           });
       }, 5000);
    }

  

    render(){
        return(
            <div>
                <h1 id="contact">Contact</h1>
                <h3 id="notice"> {this.state.status}</h3>
                <form className="contact" onSubmit={this.handleSubmit}>

                    <div className="form">
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" id="" onChange={this.handleInput} value={this.state.name} required/>
                        </div>

                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" id="" onChange={this.handleInput} value={this.state.email} required/>
                        </div>

                        <div className="form-group">
                            <label>Phone:</label>
                            <input type="tel" name="phone" id="" onChange={this.handleInput} value={this.state.phone} required/>
                        </div>

                        <div className="form-group message">
                            <label>Message:</label>
                            <textarea name="message" id="" onChange={this.handleInput} cols="30" rows="10" value={this.state.message} required></textarea>
                        </div>
                        <div className="form-group message">
                            <button>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default Contact;