import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    Redirect
  
  } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Header</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">home <span className="sr-only">(current)</span></Link>
                        </li>
                        <span className="navbar-text">
                            -
                        </span>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feed">feed</Link>
                        </li>
                        <span className="navbar-text">
                            -
                        </span>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq">faq</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </Router>
        )
    }
}
