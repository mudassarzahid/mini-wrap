import './TermButton.css';

import PropTypes from "prop-types";
import React from "react";


const TermButton = props => {
  let style = {};

  if (props.isSelected) {
    style.backgroundColor = "rgba(89, 89, 89, 1)";
  }

  return (
    <div onClick={props.onClick} className="term-button" style={style}>
      <span name="term">{props.termDesc}</span>
    </div>
  );
};

TermButton.propTypes = {
  isSelected: PropTypes.bool,
  termDesc: PropTypes.string,
  onClick: PropTypes.func,
};

export default TermButton;
