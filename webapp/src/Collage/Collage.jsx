import React from 'react';
import './Collage.css';
import TodaysDate from "../Pure/TodaysDate";

const Collage = (props) => {
  let galleryStyle = {}

  if (props.isVisible) {
    galleryStyle.display = 'block';
  } else {
    galleryStyle.display = 'none';
  }

  let category = props.category;
  let term = props.term;

  return (
    <div className="gallery"
         id={props.id}
         style={galleryStyle}>
      <div className="collage-headline">
        my top {category} {term}
      </div>

      {React.Children.toArray(
        props.images.map((item) => (
          <a href={item.url}
             target="_blank"
             rel="noreferrer">
          <span className="gallery-container">
              <img
                src={item.thumbnail}
                alt={item.tags[0].value}
                width={180}
                height={180}/>
              <div className="gallery-text">
                {item.tags[0].value}
              </div>
            </span>
          </a>
        ))
      )}

      <div className="collage-subtext">
        <span className="website-name">https://wrapped.mudi.me/</span>
        <TodaysDate/>
      </div>
    </div>
  );
}

export default Collage;
