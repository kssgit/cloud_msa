import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import BookDetailView from '../view/BookDetailView';

@inject("BookStore")
@observer
class BookContainer extends Component {
    render() {
        const {book} = this.props.BookStore;
        return (
        
            <BookDetailView book={book}/>
        
        );
    }
}

export default BookContainer;