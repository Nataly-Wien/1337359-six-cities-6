import browserHistory from '../../browser-history';
import {ActionType} from '../action';
import {Routes} from '../../const';

export const redirect = (_store) => (next) => (action) => {

  switch (action.type) {
    case ActionType.REDIRECT_TO_ROUTE:
      browserHistory.push(action.payload);
      break;

    case ActionType.REDIRECT_TO_BACK:

      if (browserHistory.length > 2) {
        browserHistory.goBack();
      } else {
        browserHistory.push(Routes.HOME);
      }
      break;
  }

  return next(action);
};
