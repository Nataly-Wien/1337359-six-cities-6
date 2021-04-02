import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import ReviewsForm from './review-form';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});
const store = mockStore({
  DATA: {
    isCommentPosting: false,
    isPostCommentError: false,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: {
      avatarUrl: `img/avatar.jpg`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      name: `Oliver.conner`,
    },
  },
});

it(`Should reviews form render correctly`, () => {

  const addReview = () => { };

  const {container} = render(<Provider store={store}>
    <ReviewsForm addReview={addReview} />
  </Provider>);

  expect(container).toMatchSnapshot();
});
