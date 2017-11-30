import React, { Component } from "react";
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';



class Book extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            imageLinks: {}
        };
    }

    componentDidMount() {
        this.setState({ shelf: this.props.shelf });        
        BooksAPI.get(this.props.id.toString()).then(res => this.setState(res));
    }

    handleChange = (evt, book) => {
        this.props.update(this.props, evt.target.value);
        this.setState({ shelf: evt.target.value });
    }

    render() {

        let _props = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + this.state.imageLinks.thumbnail + ')' }}></div>
                        <div className="book-shelf-changer">
                            <select value={ this.state.shelf } onChange={ this.handleChange }>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{ this.state.title ? this.state.title : ""}</div>
                    <div className="book-authors">{ this.state.authors ? this.state.authors : "" }</div>
                </div>
            </li>
        )
    }
}

export default Book;
