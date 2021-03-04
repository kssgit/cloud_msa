
import React, { useState } from 'react';
import { Select,Form , Button, Dropdown } from 'semantic-ui-react'

function SelectF(props) {
    const [value , setValue] = useState('coconut');
    function handleSubmit(e){
        alert('Your favorite flavor is: ' + value);
        e.preventDefault();
    }
    const handleChange=(e,data)=>{
        console.log(e, data)
        setValue(data.value);
    }
    const data =[
        {key: '1',text :"Grapefruit"  ,value: 'grapefruit' },
        { key: '2', value: 'lime', text : "Lime"},
        { key: '3', value: 'coconut',text : "Coconut"}
    ]

    
    return (
            // <Form onSubmit={handleSubmit}>
            //     <Dropdown value={value} options={data} 
            //     onChange={(e,data)=>{handleChange(e,data)}}/> 
            //     <Button type='submit'>Submit</Button>
            // </Form>
            <Form onSubmit={handleSubmit}>
                <Select value={value} options={data} 
                onChange={(e,data)=>{handleChange(e,data)}}/> 
                <Button type='submit'>Submit</Button>
            </Form>

    );
}

export default SelectF;