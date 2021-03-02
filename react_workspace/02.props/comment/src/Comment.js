import React from 'react';
import PropTypes from 'prop-types';
import Userinfo from './component/Userinfo';

Comment.propTypes = {
    //date : PropTypes.formatDate,
    text : PropTypes.string,
    author : PropTypes.object,

};

function formatDate(date) {
    return date.toLocaleDateString();
  }
function Comment(props) {
    return (
        <div className="Comment">
            <Userinfo author = {props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;