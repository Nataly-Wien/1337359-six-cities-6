import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {ActionCreator} from './store/action';
import {checkAuth} from './store/api-actions';
import {AuthorizationStatus} from './const';

const handleAuthorizationError = () => store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
const handleDataLoadingError = (err) => store.dispatch(ActionCreator.setErrorStatus(err));

const api = createAPI(handleAuthorizationError, handleDataLoadingError);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth());

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.querySelector(`#root`)
);
