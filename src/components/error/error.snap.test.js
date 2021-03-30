import React from 'react';
import {render} from '@testing-library/react';
import Error from './error';

it(`Should errors render correctly`, () => {
  const {container} = render(<Error />);

  expect(container).toMatchSnapshot();
});
