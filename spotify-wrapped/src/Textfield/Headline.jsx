import React from "react";
import './Headline.css';

const Headline = props => {

  return (
    <div className="username">
      <h1>{props.username}'s spotify wrapped &#128535;&#9996;</h1>
    </div>);

};

export default Headline;

