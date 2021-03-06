import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
    state = {
        query: '',
        books: []
    }

     updateQuery = (query) => {
        let maxResults = 20;
        this.setState({ query: query })
        query !== '' ? (
             BooksAPI.search(query, maxResults).then((books) => {
              books.error ? this.setState({ books: [] }) : (
                  this.addShelfToSearchedBooks(books),
                  this.setState({ books })
                )
             })
        ) : this.setState({ books: [] });
     }

  addShelfToSearchedBooks = (searchedBooks) => {
    searchedBooks.forEach((book) => {
      let ub = this.props.userBooks.find((userBook) => {
        return userBook.id === book.id;
      });
      if (ub) {
        book.shelf = ub.shelf;
      } else {
        book.shelf = 'none';
      }
    })
  }

  render() {
        let _props = this.props;
    return (
      <div className="search-books">
          <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                  <input type="text"
                      placeholder="Search by title or author"
                      value={this.state.query}
                      onChange={(event) => this.updateQuery(event.target.value)}
                  />
              </div>
          </div>
          <div className="search-books-results">
              <ol className="books-grid">
                  {this.state.books.length > 0 && (
                    this.state.books.map(book =>  <Book book={ book } update={ _props.update } key={ book.id } />  ) 
              )}
          </ol>
      </div>
  </div>
    )
  }
}

export default Search;
