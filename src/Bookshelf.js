import React, { Component } from "react";
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchPage: false,
            bookList: []
        };
    }
    componentWillMount() {
        //BooksAPI.getAll().then(res => this.setState(res));
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ bookList: nextProps.bookList });  
    }
    render() {

        let _props = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ _props.shelftitle ? _props.shelftitle : ""}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {  this.state.bookList.map(book =>  <Book update={ _props.update } key={ book.id } title="Test" authors="Test" id={ book.id } shelf={ _props.shelftitle }/>  ) } 
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;
