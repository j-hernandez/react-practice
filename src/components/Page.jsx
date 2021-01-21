import React, { Component } from 'react'
import Feed from './Feed';
import Faq from './Faq';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    Redirect
  
  } from 'react-router-dom';

export default class Page extends Component {
    render() {
        return (
            <>
                <h1>Home Page</h1>
            </>
        )
    }
}
