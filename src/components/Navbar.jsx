import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/feed/">Feed</NavLink></li>
                    <li><NavLink to="/faq/">FAQ</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;