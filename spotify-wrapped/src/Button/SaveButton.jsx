import React from "react";
import './SaveButton.css';

const SaveButton = props => {
  return (
    <div onClick={props.onClick}
         className="button">
      <span>save collage</span>
    </div>);
};

export default SaveButton;