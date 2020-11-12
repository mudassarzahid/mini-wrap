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
      <div className="button"
           id={props.id}
           onClick={props.onClick}
           visible={props.isVisible}>
        <span>save collage</span>
      </div>
    </div>
  );
};

export default SaveButton;