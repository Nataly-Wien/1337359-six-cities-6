import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../../types-validation/hotel-types-validation';
import {reviewTypesValidation} from '../../../types-validation/review-types-validation';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import Header from '../../header/header';
import Room from '../../room/room';
import ErrorWrapper from '../../error-wrapper/error-wrapper';
import {Types} from '../../../const';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {fetchHotel, fetchNear, fetchComments, postComment} from '../../../store/api-actions';
import {
  getCurrentLoadingStatus, getCommentsLoadingStatus, getNearLoadingStatus, getLoadingErrorStatus,
  getCurrentHotel, getNearHotels, getComments
} from '../../../store/data/selectors';

const RoomPage = ({hotel, nearHotels, reviews, onLoadCurrent, onLoadNear, onLoadComments,
  isCurrentLoading, isNearLoading, isCommentsLoading, isLoadingError, addReview, authorizationStatus, match}) => {

  useEffect(() => {
    onLoadCurrent();
    onLoadComments();
    onLoadNear();
  }, [match.params.id, authorizationStatus]);

  return (
    <div className="page">
      <Header page={Types.NOT_MAIN_PAGE} />
      <main className="page__main page__main--property">
        <ErrorWrapper isLoadingError={isLoadingError}>
          <LoadWrapper isDataLoading={isCurrentLoading || isNearLoading || isCommentsLoading}>
            <Room hotel={hotel} nearPlacesHotels={nearHotels} reviews={reviews} addReview={addReview} />
          </LoadWrapper>
        </ErrorWrapper>
      </main>
    </div>
  );
};

RoomPage.propTypes = {
  nearHotels: PropTypes.arrayOf(hotelTypesValidation),
  hotel: hotelTypesValidation,
  reviews: PropTypes.arrayOf(reviewTypesValidation),
  onLoadCurrent: PropTypes.func.isRequired,
  onLoadNear: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  isCurrentLoading: PropTypes.bool.isRequired,
  isNearLoading: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
  isCommentsLoading: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  addReview: PropTypes.func.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isCurrentLoading: getCurrentLoadingStatus(state),
  isCommentsLoading: getCommentsLoadingStatus(state),
  isNearLoading: getNearLoadingStatus(state),
  isLoadingError: getLoadingErrorStatus(state),
  hotel: getCurrentHotel(state),
  nearHotels: getNearHotels(state),
  reviews: getComments(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch, {match}) => ({
  onLoadCurrent: () => dispatch(fetchHotel(match.params.id)),
  onLoadNear: () => dispatch(fetchNear(match.params.id)),
  onLoadComments: () => dispatch(fetchComments(match.params.id)),
  addReview: (hotelRating, review) => dispatch(postComment(match.params.id, {rating: +hotelRating, comment: review})),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
