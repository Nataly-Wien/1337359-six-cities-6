import React from 'react';
import {render} from '@testing-library/react';
import ReviewField from './review-field';

it(`Should review textarea render correctly`, () => {
  const onChange = () => { };
  const review = `Lovely bright space and comfortable beds. We had two apartments, one at the front and one at the back. The apartment at the back was lovely and roomy, the one at the front pretty cramped, but good value for money.`;

  const {container} = render(<ReviewField onChange={onChange} review={review} />);

  expect(container).toMatchSnapshot();
});
