import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {redirect} from './store/middleware/redirect';
import {createAPI} from './services/api';
import reducer from './store/reducer';
import browserHistory from "./browser-history";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {ActionCreator} from './store/action';
import {checkAuth} from './store/api-actions';
import {AuthorizationStatus} from './const';

const api = createAPI(() => store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)), applyMiddleware(redirect)));
store.dispatch(checkAuth());

ReactDOM.render(<Provider store={store}>
  <BrowserRouter history={browserHistory}>
    <App />
  </BrowserRouter>
</Provider>, document.querySelector(`#root`)
);
