import React from "react";

const Book = (props) => {
    
    let handleChange = (evt, book) => {
        props.update(props.book, evt.target.value);
    }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + (props.book.imageLinks ? props.book.imageLinks.smallThumbnail : 'http://via.placeholder.com/128x188?text=No%20Cover') + ')' }}></div>
                        <div className="book-shelf-changer">
                            <select value={ props.book.shelf } onChange={ handleChange }>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{ props.book.title }</div>
                    <div className="book-authors">{ props.book.authors ? props.book.authors.join(', ') : '' }</div>
                </div>
            </li>
        )
    }

export default Book;
