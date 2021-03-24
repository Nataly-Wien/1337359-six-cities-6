import {ActionCreator} from './action';
import {AuthorizationStatus, Url, Routes, HttpStatusCode} from '../const';
import {adaptHotelToClient, adaptUserToClient, adaptCommentToClient} from '../common';

export const fetchHotels = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestHotels);

  return (
    api.get(Url.HOTELS)
      .then(({data}) => dispatch(ActionCreator.loadHotels(data.map(adaptHotelToClient))))
      .catch(() => dispatch(ActionCreator.failureLoadHotels()))
  );
};

export const fetchHotel = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestCurrentHotel());

  return (
    api.get(Url.HOTELS + `/${id}`)
      .then(({data}) => dispatch(ActionCreator.loadCurrentHotel(adaptHotelToClient(data))))
      .catch((err) => {
        dispatch(ActionCreator.failureCurrentHotel());

        if (err === HttpStatusCode.PAGE_NOT_FOUND) {
          dispatch(ActionCreator.redirectToRoute(Routes.NOT_FOUND));
        }
      })
  );
};

export const fetchNear = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestNearHotels());

  return (
    api.get(Url.HOTELS + `/${id}` + Url.NEAR)
      .then(({data}) => dispatch(ActionCreator.loadNearHotels(data.map(adaptHotelToClient))))
      .catch(() => dispatch(ActionCreator.failureNearHotels()))
  );
};

export const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestComments());

  return (
    api.get(Url.COMMENTS + `/${id}`)
      .then(({data}) => dispatch(ActionCreator.loadComments(data.map(adaptCommentToClient))))
      .catch(() => dispatch(ActionCreator.failureComments()))
  );
};

export const postComment = (id, comment) => (dispatch, _getState, api) => (
  api.post(Url.COMMENTS + `/${id}`, comment)
    .then(({data}) => {
      dispatch(ActionCreator.loadComments(data.map(adaptCommentToClient)));
      dispatch(ActionCreator.postComment());
    })
    .catch(() => dispatch(ActionCreator.failurePostingComment()))
);

export const fetchFavorites = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestFavorites());

  return (
    api.get(Url.FAVORITES)
      .then(({data}) => dispatch(ActionCreator.loadFavorites(data.map(adaptHotelToClient))))
      .catch(() => dispatch(ActionCreator.failureFavorites()))
  );
};

export const postFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(Url.FAVORITES + `/${id}/${status}`)
    .then(({data}) => dispatch(ActionCreator.replaceHotel(adaptHotelToClient(data))))
    .catch((err) => {
      if (err === HttpStatusCode.UNAUTHORIZED) {
        dispatch(ActionCreator.redirectToRoute(Routes.LOGIN));
      }
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(Url.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setUser(adaptUserToClient(data)));
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => { })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(Url.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUser(adaptUserToClient(data)));
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => { })
);

export const logout = () => (dispatch, _getState, api) => (api.get(Url.LOGOUT)
  .then(() => dispatch(ActionCreator.logout(
  )))
  .catch(() => { })
);
