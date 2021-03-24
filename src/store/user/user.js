import {ActionType} from '../action';
import {AuthorizationStatus, emptyUser} from '../../const';


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: emptyUser,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: emptyUser,
      };
  }

  return state;
};

export {user};
