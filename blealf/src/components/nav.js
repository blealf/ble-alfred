import React, { Component } from 'react';


class Nav extends Component{

    constructor(props){
        super(props)
        this.state = null;
    }
    render(){
        return(
           <div>
                <nav>
                    <div id="logo">
                        <div><h2>Blessing Alfred</h2></div>
                        <div>
                            <button id="menu-btn" >
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>

                    <ul id="nav-wrapper" class="wrapper">
                        <li class="nav-links">
                            <a href="#">Home</a>
                        </li>
                        <li class="nav-links">
                            <a href="#">Resume</a>
                        </li>
                        <li class="nav-links">
                            <a href="#">About</a>
                        </li>
                        <li class="nav-links">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
           </div> 
        )
    }
}

export default Nav;