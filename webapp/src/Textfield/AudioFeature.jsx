import "./AudioFeature.css";

import PropTypes from "prop-types";
import React from "react";

const AudioFeature = (props) => {
  return (
    <div className="audio-feature">
      <div className="audio-feature-emoji">{props.emoji}</div>
      <div>
        {props.score}
        {props.scale}
      </div>
      <div className="audio-feature-category">{props.category}</div>
    </div>
  );
};

AudioFeature.propTypes = {
  emoji: PropTypes.string,
  score: PropTypes.string,
  scale: PropTypes.string,
  category: PropTypes.string,
};

export default AudioFeature;
