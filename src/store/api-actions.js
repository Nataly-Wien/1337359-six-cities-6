import {ActionCreator} from './action';
import {AuthorizationStatus, Url} from '../const';
import {adaptToClient} from '../common';

export const fetchHotels = () => (next, _getState, api) => (
  api.get(Url.HOTELS)
    .then(({data}) => {
      next(ActionCreator.loadHotels(data.map(adaptToClient)));
    })
);

export const checkAuth = () => (next, _getState, api) => (api.get(Url.LOGIN)
  .then(() => next(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => { })
);

export const login = ({login: email, password}) => (next, _getState, api) => (api.post(Url.LOGIN, {email, password})
  .then(() => next(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
);
