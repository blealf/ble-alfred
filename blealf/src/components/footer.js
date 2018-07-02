import React, {Component} from 'react'

class Footer extends Component{
    render(){
        return(
            <div class="footer">
                <div class="social">
                    <div class="social-inner-wrap">
                        <a href="#">
                            <i class="f1 fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="f2 fab fa-google-plus-g"></i>
                        </a>
                        <a href="#">
                            <i class="f3 fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="f4 fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <p> &copy 2018 By Blessing Alfred</p>
                </div>
            </div>
        )
    }
}

export default Footer;