import React from 'react';
import {render} from '@testing-library/react';
import PasswordField from './password-field';

it(`Should password input render correctly`, () => {
  const onChange = () => { };
  const password = `12345678`;
  const {container} = render(<PasswordField onChange={onChange} password={password} />);

  expect(container).toMatchSnapshot();
});
