import React,{useState} from 'react';
import {Button,Form , Input} from 'semantic-ui-react'

function InputF(props) {
    const [value , setValue,InputSubmit] =useState("");
    
    return (
        <Form onSubmit={InputSubmit()}>
            <Input placeholder="name" onChange={(event)=>{setValue(event.target.value)}} ></Input>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default InputF;