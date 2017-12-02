import React, { Component } from "react";

class Book extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (evt, book) => {
        this.props.update(this.props, evt.target.value);
    }

    render() {

        let _props = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + _props.currentBook.imageLinks.smallThumbnail + ')' }}></div>
                        <div className="book-shelf-changer">
                            <select value={ _props.currentBook.shelf } onChange={ this.handleChange }>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{ _props.currentBook.title }</div>
                    <div className="book-authors">{ _props.currentBook.authors ? _props.currentBook.authors.join(', ') : '' }</div>
                </div>
            </li>
        )
    }
}

export default Book;
