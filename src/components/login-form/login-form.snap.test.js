import React from 'react';
import {render} from '@testing-library/react';
import LoginForm from './login-form';

it(`Should login form render correctly`, () => {
  const signIn = () => { };
  const {container} = render(<LoginForm signIn={signIn} />);

  expect(container).toMatchSnapshot();
});
