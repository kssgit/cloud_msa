import React,{useState} from 'react';
import {Button,Form , Input} from 'semantic-ui-react'

function InputF(props) {
    const [value , setValue] =useState("");
    
    return (
        <Form onSubmit={(event)=>{alert(value);
                event.preventDefault();
            }}>
            <Input placeholder="name" onChange={(event)=>{setValue(event.target.value)}} ></Input>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default InputF;