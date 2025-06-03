import "./Headline.css";

import PropTypes from "prop-types";
import React from "react";

import HeadlineEmoji from "../Pure/HeadlineEmoji";

const Headline = (props) => {
  return (
    <div className="headline">
      <h1>
        <span className="username">{props.username}</span>
        <span> Mini Wrap </span>
        <HeadlineEmoji />
      </h1>
    </div>
  );
};

Headline.propTypes = {
  username: PropTypes.string,
};

export default Headline;
