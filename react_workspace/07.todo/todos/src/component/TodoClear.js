import React from 'react';
import {Button} from 'semantic-ui-react'
function TodoClear(props) {
    const {allClear}=props;
    return (
        <div>
            <Button  onClick={()=>allClear()}>Clear</Button>
        </div>
    );
}

export default TodoClear;