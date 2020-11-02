import React from "react";
import './TermButton.css';

const TermButton = props => {
  let style = {};

  if (props.isSelected) {
    style.backgroundColor = "red";
  }

  return (
    <div onClick={props.onClick} className="term-button" style={style} >
      <span name="term">{props.termdesc}</span>
    </div>
  );
};

export default TermButton;