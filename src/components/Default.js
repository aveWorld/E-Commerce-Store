import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h3>page not found</h3>
                        <Link to="/">go to home page</Link>
                    </div>
                </div>
            </div>
        )
    }
}
