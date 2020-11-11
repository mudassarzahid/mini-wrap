import React from "react";
import './SaveButton.css';

const SaveButton = props => {
  let style = {}

  if (props.isVisible) {
    style.display = 'block';
  } else {
    style.display = 'none';
  }

  return (
    <div style={style}>
      <div onClick={props.onClick}
           className="button">
        <span>save collage</span>
      </div>
    </div>
  );
};

export default SaveButton;