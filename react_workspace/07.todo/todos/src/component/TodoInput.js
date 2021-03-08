import React, { useState } from 'react';
import { Form , Input ,Button} from 'semantic-ui-react'
function TodoInput(props) {
    const {InputTodoList,InputSubmit} =props;
   

    return (
        <Form onSubmit={(e)=>{
            InputSubmit();
            e.preventDefault();

        }}>
            <Input size='large' placeholder='Search...' onChange={(e)=>InputTodoList(e.target.value)}/>
            <Button type='submit' icon='hand pointer outline' size='large'></Button>
        </Form>
    );
}

export default TodoInput;