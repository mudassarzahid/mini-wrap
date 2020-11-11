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
    <div className="card-ranking"
         style={style}>
      <a className="card-link"
         href={props.link}
         target="_blank"
         rel="noreferrer">
        <span>{props.text}</span>
        <div className="card-subtext">
          <span>{props.subtext}</span>
        </div>
      </a>
    </div>
  );
};

export default Card;