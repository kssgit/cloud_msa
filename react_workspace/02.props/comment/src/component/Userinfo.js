import React from 'react';
import Avatar from './Avatar';
function Userinfo(props) {
    return (
       
            <div className="UserInfo">
                <Avatar author={props.author}/>
                <div className="UserInfo-name">
                {props.author.name}
                </div>
            </div>
        
    );
}

export default Userinfo;