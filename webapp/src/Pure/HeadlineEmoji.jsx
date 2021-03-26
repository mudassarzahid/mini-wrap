import React, {useState} from "react";
import './HeadlineEmoji.css';

const headlineEmoji = () => {
  let emoji = ['✌😗', '😤🗣💯', '👁️👄👁️', '🦔🐾', '🤘😎'];
  const randomNumber = Math.round(Math.random() * 4);
  return emoji[randomNumber];
}

const HeadlineEmoji = () => {
  const [emoji] = useState(headlineEmoji);
  return (
    <>
      {emoji}
    </>
  )
};

export default HeadlineEmoji;
