import React from "react";
import './SaveButton.css';
import { FaDownload } from 'react-icons/fa';


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
           onClick={props.onClick}
           visible={props.isVisible}>
        <span><FaDownload/> download image</span>
      </div>
    </div>
  );
};

export default SaveButton;