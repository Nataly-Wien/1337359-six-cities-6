import React from 'react';
import {render} from '@testing-library/react';
import RatingList from './rating-list';

it(`Should rating input render correctly`, () => {
  const onChange = () => { };
  const rating = `4`;

  const {container} = render(<RatingList onChange={onChange} rating={rating} />);

  expect(container).toMatchSnapshot();
});
