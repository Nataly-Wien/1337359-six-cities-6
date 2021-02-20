import React from 'react';
import PropTypes from 'prop-types';

const ImageList = ({pictures}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {pictures.map((item, i) =>
          <div className="property__image-wrapper" key={`${item}-${i}`}>
            <img className="property__image" src={item} alt="Photo studio" />
          </div>)}
      </div>
    </div>
  );
};

ImageList.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

export default ImageList;
