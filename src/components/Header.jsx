import React, { Component } from 'react';

import {
    NavLink 
  } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" exact to="/">Header</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/">home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <span className="navbar-text">
                            -
                        </span>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/feed">feed</NavLink>
                        </li>
                        <span className="navbar-text">
                            -
                        </span>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/faq">faq</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
        )
    }
}
