import React from "react";
import './Card.css';

const Card = props => {
  let cardStyle = {
    background: `url(${props.backgroundUrl})`,
  };

  let allCardsStyle = {}

  if (props.isCardVisible) {
    cardStyle.display = 'block';
  } else {
    cardStyle.display = 'none';
  }

  if (props.areCardsVisible) {
    allCardsStyle.display = 'block';
  } else {
    allCardsStyle.display = 'none';
  }

  return (
    <div style={allCardsStyle}>
      <div className="card-ranking"
           style={cardStyle}>
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
    </div>
  );
};

export default Card;