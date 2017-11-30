import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Showcase from './Showcase.js'
import Search from './Search.js'

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.updateBooks = this.updateBooks.bind(this);
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
        };
    }

    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    updateBooks = (book, shelf) => {
        BooksAPI.update(book, shelf).then((res) => {
            this.getAllBooks();
        })
     }

    componentDidMount() {
        this.getAllBooks();
    }

    checkBookShelf = (bookID) => {
        let b = this.state.books.find((book) => {
          return book.id === bookID
        });

        if (b)
          return b.shelf;
        else
          return 'none';
  }

    render() {
        let currentlyReadingBooks = this.state.books.filter((book) => book.shelf === 'currentlyReading');
        let wantToReadBooks = this.state.books.filter((book) => book.shelf === 'wantToRead');
        let readBooks = this.state.books.filter((book) => book.shelf === 'read');
        
        return (
        <div className="app">
        <Route path='/search' render={() => (
          <Search
            userBooks={this.state.books}
            updateBooks={this.updateBooks}
            checkBookShelf={this.checkBookShelf}
          />
        )} />


        <Route exact path='/' render={() => (
          <Showcase
             readBooks={readBooks}
             wantToReadBooks={wantToReadBooks}
             currentlyReadingBooks={currentlyReadingBooks}
             updateBooks={this.updateBooks}
          />
        )} />
      </div>
        )
    }
}

export default BooksApp
