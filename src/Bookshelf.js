import React, { Component } from "react";
import Book from './Book.js'

class Bookshelf extends Component {

    render() {
        let _props = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ _props.shelftitle ? _props.shelftitle : ""}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {  _props.bookList.map(book =>  <Book book={ book } update={ _props.update } key={ book.id } />  ) } 
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;
