import React from "react";
import './AudioFeature.css';

const AudioFeature = props => {
  return (
    <div className="audio-feature">
      <div>{props.emoji}</div>
      <div>{props.score}{props.scale}</div>
      <div>{props.category}</div>
    </div>);
};

export default AudioFeature;