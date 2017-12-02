import React, { Component } from "react";
import Book from './Book.js'

class NotFound extends Component {

    render() {
        let _props = this.props;
        return (
            <div className="page404">
                Wrong way, pal.
                <a href="/">Go home already</a>
            </div>
        )
    }
}

export default NotFound;
