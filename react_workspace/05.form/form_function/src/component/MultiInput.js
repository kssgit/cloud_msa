

import React, { useState } from 'react';
import {Form , Input ,Checkbox, Button} from 'semantic-ui-react'
function MultiInput(props) {
    const [isGoing, setIsGoing]  =useState(false);
    const [numberOfGuests ,setNumberOfGuests] =useState(2);
    function handleInputChange(e){
        const type =e.target.type;
        type === 'number'? setNumberOfGuests(e.target.value) : setIsGoing(!isGoing);

    }

    return (
        <Form onSubmit={(event)=>{alert(isGoing);
            event.preventDefault();
        }}>
            <Form.Field>
                <Checkbox 
                label="Is going" 
                checked={isGoing} 
                onChange={handleInputChange}/>
            </Form.Field>
            <Form.Field>
                <Input 
                placeholder="Number of Guests" 
                className="numberOfGuests" 
                type='number' 
                value={numberOfGuests} 
                onChange={handleInputChange}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>

    );
}

export default MultiInput;