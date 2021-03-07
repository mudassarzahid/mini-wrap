import React from "react";
import './HeadlineEmoji.css';
import {pure} from 'recompose';

const headlineEmoji = () => {
  let emoji = ['✌😗', '😤🗣💯', '👁️👄👁️', '🦔🐾', '🤘😎'];
  const randomNumber = Math.round(Math.random() * 4);
  return emoji[randomNumber];
}

const HeadlineEmoji = () => {
  return (
    <>
      {headlineEmoji()}
    </>
  )
};

export default pure(HeadlineEmoji);
