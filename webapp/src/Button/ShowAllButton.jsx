import './ShowAllButton.css';

import PropTypes from "prop-types";
import React from "react";

const ShowAllButton = props => {
  return (
    <div>
      <div className="show-all-button"
           onClick={props.onClick}>
        <span>{props.show}</span>
      </div>
    </div>
  );
};

ShowAllButton.propTypes = {
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
  show: PropTypes.string
};

export default ShowAllButton;
