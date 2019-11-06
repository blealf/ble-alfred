import React from 'react';

const Top = () =>
    <div className="top">
        <div className="bounding-box">
            <div className="sets"><img src={require("../assets/images/prog.png")} alt="" /></div>
            <div className="sets">
                <h2>Blessing Alfred</h2>
                {/*<h4>Phone: </h4>
                <p> <a href="tel:5195743928"> 5195743928</a></p>*/}
                <h4 >Email:</h4>
                <p><a href="mailto:example@email.com">blealfrails@gmail.com</a></p>
                <h4>Address:</h4>
                <p> Ontario, Canada</p> 
            </div>
            <div className="social">
                <div className="social-inner-wrap">
                     <a href="https://www.instagram.com/blealf/?hl=en" target="_blank" rel="noopener noreferrer">
                        <i className="f1 fab fa-instagram"></i>
                    </a>
                    <a href="https://plus.google.com/u/0/109786323889831722236" target="_blank" rel="noopener noreferrer">
                        <i className="f2 fab fa-google-plus-g"></i>
                    </a>
                    <a href="https://twitter.com/BlessingAlfre18" target="_blank" rel="noopener noreferrer">
                        <i className="f3 fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/blessing-a-91a46115b/" target="_blank" rel="noopener noreferrer">
                        <i className="f4 fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/blealf" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a> 
                </div>
            </div>
        </div>
    </div>
 
export default Top;