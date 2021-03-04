import React,{useState} from 'react';
import Books from './Books';
import BookDetail from './component/BookDtail';
import BookList from './component/BookList';
import {Grid} from 'semantic-ui-react';



function App(props) {
  const [books, setBooks] = useState(Books);
  const [book , setBook] =useState(Books[0]);
 
  return (
    <Grid columns={2}>
          

          <Grid.Column>
            {/*  select 부분  */}
            <BookList books={books} bookSelect={(selectbook)=>{setBook(selectbook);}}/>
          </Grid.Column>

          <Grid.Column>
            <BookDetail book={book}/>
          </Grid.Column>
       

      </Grid>
  );
}

export default App;