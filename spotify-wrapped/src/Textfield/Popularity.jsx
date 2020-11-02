import React from "react";
import './Popularity.css';

const Popularity = props => {
  let style = {};

  if (props.isVisible) {
    style.display = 'block';
  } else {
    style.display = 'none';
  }

  return (
    <div className="popularity"
         style={style}>
      <div>
        <span className="description">average popularity score: </span>
        {props.description}/100
      </div>
      <div>
        <span className="description">least mainstream {props.category}: </span>
        <span className="name">{props.name}</span>
        <span className="by">{props.by}</span>
        <span className="track-artists">{props.trackArtists} </span>
        (score: {props.score}/100)
      </div>
    </div>);

};

export default Popularity;