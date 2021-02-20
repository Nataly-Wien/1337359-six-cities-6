import React from 'react';
import PropTypes from 'prop-types';

const FavoriteMark = ({isFavorite = true, markType}) => {
  const {buttonClassTerm, imgWidth, imgHeight} = markType;

  return (
    <button className={`${buttonClassTerm}__bookmark-button button ${isFavorite ? ` ${buttonClassTerm}__bookmark-button--active` : ``}`} type="button">
      <svg className={`${buttonClassTerm}__bookmark-icon`} width={imgWidth} height={imgHeight}>
        <use xlinkHref="#icon-bookmark"> </use>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

FavoriteMark.propTypes = {
  isFavorite: PropTypes.bool,
  markType: PropTypes.shape({
    buttonClassTerm: PropTypes.string,
    imgWidth: PropTypes.string,
    imgHeight: PropTypes.string,
  }).isRequired,
};

export default FavoriteMark;
