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
        <div>
          <div>{props.averagePopularity}/10</div>
          <div className="description">average popularity</div>
        </div>

        <div>
          <div className="name">{props.name}</div>
          <div className="description">least mainstream</div>
        </div>
      </div>
    </div>);

};

export default Popularity;