import React from 'react';
import {Item}  from 'semantic-ui-react'
import BookItem from './BookItem';
function BookList(props) {
    const {books, bookSelect} = props;
    //알아서 리스트 크기많큼 뿌려준다
    const listItems = books.map((book,index) => {
        // key값은 반드시 줘야한다 (유니크한 값)
        return(
        <BookItem key={index} book = {book} bookSelect = {bookSelect}/>
        );
    });
    return (
        <Item.Group>
        {listItems}
        {/* 컴포넌트가 아니기 때문에 */}
    </Item.Group>
    );
}

export default BookList;