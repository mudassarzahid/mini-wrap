import React from "react";
import './Headline.css';

const Headline = props => {
  const username = !props.username ? 'my' : `${props.username}'s`;
  return (
    <div className="headline">
      <h1><span className="username">{username}</span> Mini Wrap <span>{props.emoji}</span></h1>
    </div>);

};

export default Headline;

