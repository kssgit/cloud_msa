
import React from 'react';
import InputF from './component/InputF';
import InputTextarea from './component/InputTextarea';
import MultiInput from './component/MultiInput';
import SelectF from './component/SelectF';
import 'semantic-ui-css/semantic.min.css'
import {Grid} from 'semantic-ui-react'
function App(props) {
  
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
        <InputF/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      <Grid.Column>
        <InputTextarea/>
          </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      <Grid.Column>
          
        <MultiInput/>
          </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      <Grid.Column>
        <SelectF/>
          </Grid.Column>
      </Grid.Row>
    </Grid>
   
  );
}

export default App;
