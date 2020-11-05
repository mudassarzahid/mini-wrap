import React from "react";
import './AudioFeature.css';

const AudioFeature = props => {
  return (
    <div className="audio-feature">
      <div className="audio-feature-emoji">{props.emoji}</div>
      <div>{props.score}{props.scale}</div>
      <div className="audio-feature-category">{props.category}</div>
    </div>);
};

export default AudioFeature;