import React from 'react';
import Gallery from 'react-grid-gallery';
import './Collage.css';

const Collage = props => {
  let style = {}

  if (props.isVisible) {
    style.display = 'block';
  } else {
    style.display = 'none';
  }

  return (
    <div className="gallery"
         id={props.id}
         style={style}>
      <div className="collage-headline">
        my top {props.category} {props.term}
      </div>

      <Gallery images={props.images}
               enableLightbox={false}
               enableImageSelection={false}
<<<<<<< HEAD
<<<<<<< HEAD
               onClickThumbnail={(index) => {window.open(props.images[index].url, '_blank')}}/>
=======
               onClickThumbnail={(index) => {window.open(props.images[index].url, '_blank', 'noreferrer')}}/>
>>>>>>> 7957c8b... Update backend
=======
               onClickThumbnail={(index) => {window.open(props.images[index].url, '_blank')}}/>
>>>>>>> 222e31f... Update gitignore

      <div className="collage-subtext">
        <span className="website-name">https://wrapped.mudi.me/</span>
        <span className="date-textfield">{props.date}</span>
      </div>
    </div>
  );
}

export default Collage;