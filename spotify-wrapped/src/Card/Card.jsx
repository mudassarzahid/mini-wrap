import React from "react";
import './Card.css';

const Card = props => {
  let style = {
    background: `url(${props.backgroundUrl})`,
  };

  if (props.isVisible) {
    style.display = 'block';
  } else {
    style.display = 'none';
  }

  return (
    <div className="card-ranking" style={style}>
      <span>{props.text}</span>
      <div className="card-subtext">
        <span>{props.subtext}</span>
      </div>
    </div>
  );
};

export default Card;