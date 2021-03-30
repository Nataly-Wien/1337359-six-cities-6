import React from 'react';
import {render} from '@testing-library/react';
import PremiumMark from './premium-mark';
import {Types} from '../../const';

it(`Should premium mark render correctly`, () => {
  const {container} = render(<PremiumMark type={Types.CARD} />);

  expect(container).toMatchSnapshot();
});
