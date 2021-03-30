import React from 'react';
import {render} from '@testing-library/react';
import LoginField from './login-field';

it(`Should login input render correctly`, () => {
  const onChange = () => { };
  const login = `Oliver.conner@gmail.com`;

  const {container} = render(<LoginField onChange={onChange} login={login} />);

  expect(container).toMatchSnapshot();
});
