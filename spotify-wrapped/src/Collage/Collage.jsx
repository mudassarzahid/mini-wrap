//import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';

const Collage = props => {
  return (
    <div style={{
      display: "block",
      minHeight: "1px",
      width: "100%",
      border: "1px solid #ddd",
      overflow: "auto"
    }}>
      <Gallery
        images={props.images}
        enableLightbox={false}
        enableImageSelection={false}/>
    </div>
  );
}

export default Collage;