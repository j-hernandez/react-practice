import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    NavLink 
  } from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <>
            <Router>
                <nav className="navbar fixed-bottom navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Footer</NavLink>
                </nav>
            </Router>
            </>
        )
    }
}
