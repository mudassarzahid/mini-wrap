import './TopButton.css';

import PropTypes from "prop-types";
import React from "react";

const TopButton = props => {
  let style = {};

  if (props.isSelected) {
    style.backgroundColor = "#306b30";
  }

  return (
    <div onClick={props.onClick}
         style={style}
         className="button">
      <span>top {props.category}</span>
    </div>);
};

TopButton.propTypes = {
  onClick: PropTypes.func,
  category: PropTypes.string,
  isSelected: PropTypes.bool
};

export default TopButton;
