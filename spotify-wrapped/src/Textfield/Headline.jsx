import React from "react";
import './Headline.css';

const Headline = props => {
  return (
    <div className="headline">
      <h1><span className="username">{props.username}</span>'s spotify wrapped <span>{props.emoji}</span></h1>
    </div>);

};

export default Headline;
