import React from 'react';
import Gallery from 'react-grid-gallery';

const Collage = props => {
  let style = {}

  if (props.isVisible) {
    style.display = 'block';
  } else {
    style.display = 'none';
  }

  return (
    <div style={style}
         className="gallery"
         id={props.id}>
      <div className="collage-headline">
        my top {props.category} {props.term}
      </div>

      <Gallery
        images={props.images}
        isVisible={props.visible}
        enableLightbox={false}
        enableImageSelection={false}/>

      <div className="collage-subtext">
        <span className="website-name">https://wrapped.mudi.me/</span>
        <span className="date-textfield">{props.date}</span>
      </div>
    </div>
  );
}

export default Collage;