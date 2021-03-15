import {ActionCreator} from './action';
import {AuthorizationStatus, Url} from '../const';
import {adaptHotelToClient, adaptUserToClient} from '../common';

export const fetchHotels = () => (dispatch, _getState, api) => (
  api.get(Url.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadHotels(data.map(adaptHotelToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (api.get(Url.LOGIN)
  .then(({data}) => dispatch(ActionCreator.setUser(adaptUserToClient(data))))
  .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => { })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (api.post(Url.LOGIN, {email, password})
  .then(({data}) => dispatch(ActionCreator.setUser(adaptUserToClient(data))))
  .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => { })
);

export const logout = () => (dispatch, _getState, api) => (api.get(Url.LOGOUT)
  .then(() => dispatch(ActionCreator.logout()))
);
