import {ActionCreator} from './action';
import {AuthorizationStatus, Url} from '../const';
import {adaptHotelToClient, adaptUserToClient} from '../common';

export const fetchHotels = () => (next, _getState, api) => (
  api.get(Url.HOTELS)
    .then(({data}) => next(ActionCreator.loadHotels(data.map(adaptHotelToClient))))
);

export const checkAuth = () => (next, _getState, api) => (api.get(Url.LOGIN)
  .then(({data}) => next(ActionCreator.requiredAuthorization({status: AuthorizationStatus.AUTH, user: adaptUserToClient(data)})))
  .catch(() => { })
);

export const login = ({login: email, password}) => (next, _getState, api) => (api.post(Url.LOGIN, {email, password})
  .then(({data}) => next(ActionCreator.requiredAuthorization({status: AuthorizationStatus.AUTH, user: adaptUserToClient(data)})))
  .catch(() => {

  })
);

export const logout = () => (next, _getState, api) => (api.get(Url.LOGOUT)
  .then(() => next(ActionCreator.logout()))
);
