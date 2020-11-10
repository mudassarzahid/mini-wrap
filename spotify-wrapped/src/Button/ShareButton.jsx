import React from "react";
import './ShareButton.css';

const ShareButton = props => {

  return (
    <div className="share-body">
      <div className="share-container">
        <ul className="btn-share clearfix">
          <li>
            <a href="#" className="share-button share entypo-share"></a>
          </li>
          <li>
            <a href="https://twitter.com/berkpw" className="share-button twitter entypo-twitter" target="_blank"></a>
          </li>
          <li>
            <a href="https://www.facebook.com/share.php?u=" className="share-button facebook entypo-facebook"
               target="_blank"></a>
          </li>
          <li>
            <a href="https://plus.google.com/" className="share-button google entypo-gplus" target="_blank"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShareButton;