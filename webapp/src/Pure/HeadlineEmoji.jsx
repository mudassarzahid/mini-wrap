import React, {useState} from "react";

const headlineEmoji = () => {
  let emoji = ['✌😗', '😤🗣💯', '👁️👄👁️', '🦔🐾', '🤘😎'];
  const randomNumber = Math.round(Math.random() * 4);
  return emoji[randomNumber];
}

const HeadlineEmoji = () => {
  const [emoji] = useState(headlineEmoji);
  return (
    <span style={{"whiteSpace": "nowrap"}}>
      {emoji}
    </span>
  )
};

export default HeadlineEmoji;
