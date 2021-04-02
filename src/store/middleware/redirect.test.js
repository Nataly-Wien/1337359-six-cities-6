import {redirect} from './redirect';
import {ActionCreator} from '../action';
import {Routes} from '../../const';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`../../browser-history.js`, () => fakeHistory);

describe(`Should custom middleware work correctly`, () => {
  it(`Should action pass to next middleware`, () => {
    const {invoke, next} = mockRedux();
    const action = ActionCreator.redirectToRoute(Routes.LOGIN);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Should redirect to /login add to fakeHistory`, () => {
    const {invoke} = mockRedux();
    invoke(ActionCreator.redirectToRoute(Routes.LOGIN));
    expect(fakeHistory.location.pathname).toBe(Routes.LOGIN);
  });

  it(`Should redirect to /login add to fakeHistory redirect to /404 add to fakeHistory`, () => {
    const {invoke} = mockRedux();
    invoke(ActionCreator.redirectToRoute(Routes.NOT_FOUND));
    expect(fakeHistory.location.pathname).toBe(Routes.NOT_FOUND);
  });

  it(`Shouldn't redirect when bad action`, () => {
    const url = `/abc`;
    const {invoke} = mockRedux();
    invoke({type: `TEST_ACTION`, payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
