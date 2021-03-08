import React, { Component } from 'react';
import  { Search,Grid} from 'semantic-ui-react'
import BookDetail from './component/BookDetail';
import BookList from './component/BookList';

class App extends Component {
  

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
            <BookList />
          </Grid.Column>

          <Grid.Column>
            <BookDetail />
          </Grid.Column>
       

      </Grid>
    );
  }
}

export default App;
