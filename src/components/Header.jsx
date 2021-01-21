import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Header</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">home <span className="sr-only">(current)</span></a>
                        </li>
                        <span className="navbar-text">
                            -
                        </span>
                        <li className="nav-item">
                            <a className="nav-link" href="#">feed</a>
                        </li>
                        <span className="navbar-text">
                            -
                        </span>
                        <li className="nav-item">
                            <a className="nav-link" href="#">faq</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </>
        )
    }
}
