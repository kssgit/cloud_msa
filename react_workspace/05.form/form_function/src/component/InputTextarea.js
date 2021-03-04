
import React, { useState } from 'react';
import {Button,Form ,TextArea } from 'semantic-ui-react'
function InputTextarea(props) {
    const [value , setValue] = useState('Please write an essay about your favorite DOM element.');
    function handleSubmit(event){
        alert('An essay was submitted: ' + value);
        event.preventDefault();
    }
    function handleChange(event){
        setValue(event.target.value);
    }
    return (
            <Form onSubmit={handleSubmit}>
                <TextArea placeholder="Essay" onChange={handleChange}></TextArea>
                <Button type='submit'>Submit</Button>
            </Form>
   
    );
}

export default InputTextarea;