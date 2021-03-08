import React from 'react';
import {List ,Button} from 'semantic-ui-react'
function TodoList(props) {
    const {todoList,hadleDelete}=props;
    const listItem=[];
    todoList.forEach((todo,index) => {
        listItem.push(
        <List.Item>
            {/* <List.Icon name='checkmark' size='large' verticalAlign='middle'/> */}
            <List.Content>
                {todo.title} &nbsp;&nbsp;&nbsp;
            <Button icon='delete' onClick={(e)=>hadleDelete(e,index)}/>
            </List.Content>
        </List.Item>);
        
    });

    
    return (
       
        <List divided relaxed>
            {listItem}
        </List>
     
    );
}

export default TodoList;