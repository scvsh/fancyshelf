import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Showcase from './Showcase.js'

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.updateBooks = this.updateBooks.bind(this);
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            /**
             * TODO: Instead of using this state variable to keep track of which page
             * we're on, use the URL in the browser's address bar. This will ensure that
             * users can use the browser's back and forward buttons to navigate between
             * pages, as well as provide a good URL they can bookmark and share.
             */
            showSearchPage: false
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


    render() {
        let currentlyReadingBooks = this.state.books.filter((book) => book.shelf === 'currentlyReading');
        let wantToReadBooks = this.state.books.filter((book) => book.shelf === 'wantToRead');
        let readBooks = this.state.books.filter((book) => book.shelf === 'read');
        
        return (
        <div className="app">
        <Route path='/search' render={() => (
          <SearchPage
            userBooks={this.state.books}
            updateShelf={this.updateShelf}
            checkBookShelf={this.checkBookShelf}
          />
        )} />


        <Route exact path='/' render={() => (
          <Showcase
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )} />
      </div>
        )
    }
}

export default BooksApp
