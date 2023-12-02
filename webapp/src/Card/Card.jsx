import './Card.css';

import PropTypes from "prop-types";
import React from "react";

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
      <a className="card-link"
         href={props.link}
         target="_blank"
         rel="noreferrer">
        <div className="card-ranking"
             style={cardStyle}>
          <span>{props.text}</span>
          <div className="card-subtext">
            <span>{props.subtext}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

Card.propTypes = {
  areCardsVisible: PropTypes.bool,
  isCardVisible: PropTypes.bool,
  backgroundUrl: PropTypes.string,
  link: PropTypes.string,
  subtext: PropTypes.string,
  text: PropTypes.string
};

export default Card;
