import React from "react";
import './ShowAllButton.css';

const ShowAllButton = props => {
 return (
    <div>
      <div className="show-all-button"
           onClick={props.onClick}
           visible={props.isVisible}>
        <span>{props.show}</span>
      </div>
    </div>
  );
};

export default ShowAllButton;