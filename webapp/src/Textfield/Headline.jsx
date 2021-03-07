import './Headline.css';
import HeadlineEmoji from "../Pure/HeadlineEmoji";

const Headline = props => {
  return (
    <div className="headline">
      <h1><span className="username">{props.username}</span> Mini Wrap <HeadlineEmoji/></h1>
    </div>);
};

export default Headline;
