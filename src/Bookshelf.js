import React, { Component } from "react";
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {
    state = {
    booklist: BooksAPI.getAll(),
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
	render() {

	let _props = this.props;
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{ _props.shelftitle ? _props.shelftitle : ""}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                          <Book title="Test" authors="Test"/> 
                      </li>
                    </ol>
                  </div>
              </div>
        )
	}
}

export default Bookshelf;
