import './SaveButton.css';

import PropTypes from "prop-types";
import React from "react";
import {FaDownload} from 'react-icons/fa';


const SaveButton = props => {
  let style = {}

  if (props.isVisible) {
    style.display = 'block';
  } else {
    style.display = 'none';
  }

  return (
    <div style={style}>
      <div className="save-button"
           id={props.id}
           onClick={props.onClick}>
        <span><FaDownload/> download collage</span>
      </div>
    </div>
  );
};

SaveButton.propTypes = {
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  visible: PropTypes.bool
};

export default SaveButton;
