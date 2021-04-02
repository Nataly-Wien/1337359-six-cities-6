import {NameSpace} from '../reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUser = (state) => state[NameSpace.USER].user;
export const getLoginErrorStatus = (state) => state[NameSpace.USER].isLoginError;
