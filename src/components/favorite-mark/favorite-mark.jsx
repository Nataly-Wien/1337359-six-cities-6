import React from 'react';
import PropTypes from 'prop-types';

const FavoriteMark = ({isFavorite = true, isRoomPage = false}) => {
  const classTerm = isRoomPage ? `property` : `place-card`;

  return (
    <button className={`${classTerm}__bookmark-button button ${isFavorite ? ` ${classTerm}__bookmark-button--active` : ``}`} type="button">
      <svg className={`${classTerm}__bookmark-icon`} width={isRoomPage ? `31` : `18`} height={isRoomPage ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"> </use>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

FavoriteMark.propTypes = {
  isFavorite: PropTypes.bool,
  isRoomPage: PropTypes.bool,
};

export default FavoriteMark;
