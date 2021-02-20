import React from 'react';
import PropTypes from 'prop-types';
import {FavoriteMarkTypes} from '../../const';

const FavoriteMark = ({isFavorite = true, type}) => {
  const {buttonClassTerm, imgWidth, imgHeight} = FavoriteMarkTypes[type];

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
  type: PropTypes.string.isRequired,
};

export default FavoriteMark;
