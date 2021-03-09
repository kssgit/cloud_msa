import React, { Component } from 'react';
import  { Search,Grid} from 'semantic-ui-react'
import BookContainer from './container/BookContainer';
import BookListContainer from './container/BookListContainer';

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
            <BookListContainer />
          </Grid.Column>

          <Grid.Column>
            <BookContainer />
          </Grid.Column>
       

      </Grid>
    );
  }
}

export default App;
