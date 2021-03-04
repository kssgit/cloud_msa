import React, { Component } from 'react';
import _ from 'lodash'
import  { Search,Grid} from 'semantic-ui-react'
//서버에서 받아온 json 데이터
import Books from './Books';
//각각의 컴포넌트
import BookDetail from './component/BookDetail';
import BookList from './component/BookList';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      books : Books,
      book : Books[0],//첫번째 데이터
    }
  }

onBookSelect =(selectbook) =>{
  this.setState(
    {
      book : selectbook,
    }
  );
}

  render() {
    return (
      <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={6}>
              <Search
          
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Column>
            <BookList books={this.state.books} bookSelect={this.onBookSelect}/>
          </Grid.Column>

          <Grid.Column>
            <BookDetail book={this.state.book}/>
          </Grid.Column>
       

      </Grid>
    );
  }
}

export default App;
