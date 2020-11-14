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
    <div style={style}>
      <div className="popularity-content">
        <div className="popularity-element">
          <div className="popularity-emoji">{props.popularityEmoji}</div>
          <div className="average-popularity">{props.averagePopularity}/10</div>
          <div className="description">popularity</div>
        </div>

        <div className="popularity-element">
          <div> {props.leastMainstreamEmoji} </div>
          <a className="popularity-link" href={props.link} target="_blank" rel="noreferrer">
            <div className="name">{props.name}</div>
          </a>
          <div className="description">least mainstream</div>
        </div>
      </div>
    </div>);

};

export default Popularity;