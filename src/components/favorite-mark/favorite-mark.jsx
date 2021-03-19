import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import browserHistory from '../../browser-history';
import {postFavorite} from '../../store/api-actions';
import {FavoriteMarkTypes, AuthorizationStatus} from '../../const';

const FavoriteMark = ({isFavorite = true, type, setFavorite, authorizationStatus}) => {
  const {buttonClassTerm, imgWidth, imgHeight} = FavoriteMarkTypes[type];

  const onFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      setFavorite(+!isFavorite);
    } else {
      browserHistory.push(`/login`);
    }
  };

  return (
    <button className={`${buttonClassTerm}__bookmark-button button ${isFavorite ? ` ${buttonClassTerm}__bookmark-button--active` : ``}`}
      type="button" onClick={onFavoriteClick}>
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
  setFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFavorite: (status) => dispatch(postFavorite(ownProps.id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMark);
