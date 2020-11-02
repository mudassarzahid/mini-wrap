import React from "react";
import './TopButton.css';

const TopButton = props => {
  let style = {};

  if (props.isSelected) {
    style.backgroundColor = "#306b30";
  }

  return (
    <div onClick={props.onClick} style={style} className="button">
      <span>top {props.category}</span>
    </div>);
};

export default TopButton;