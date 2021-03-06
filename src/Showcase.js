import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom';

class Showcase extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>Fancyshelf</h1>
                    </div>
                    <div className="list-books-content">
                        <div>            
                            <Bookshelf shelftitle="Currently Reading" bookList={ this.props.currentlyReadingBooks } update={ this.props.update }/>
                            <Bookshelf shelftitle="Want to Read" bookList={ this.props.wantToReadBooks } update={ this.props.update }/> 
                            <Bookshelf shelftitle="Read" bookList={ this.props.readBooks } update={ this.props.update }/> 
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Showcase;
