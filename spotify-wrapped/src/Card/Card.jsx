import React from "react";
import './Card.css';

const Card = props => (
  <div className="card-ranking"
       style={{"background": `url(${props.backgroundUrl})`}}>
    <span>{props.text}</span>
    <div className="card-subtext">
      <span>{props.subtext}</span>
    </div>
  </div>
);

export default Card;