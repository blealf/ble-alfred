import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <h1 id="contact">Contact</h1>
                <div className="contact">

                    <div className="form">
                        <div className="form-group">
                            <label for="">Name:</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="form-group">
                            <label for="">Email:</label>
                            <input type="email" name="" id="" />
                        </div>

                        <div className="form-group">
                            <label for="">Phone:</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className="form-group message">
                            <label for="">Message:</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;