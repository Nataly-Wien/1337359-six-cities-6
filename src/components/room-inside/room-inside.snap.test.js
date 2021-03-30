import React from 'react';
import {render} from '@testing-library/react';
import RoomInside from './room-inside';

const goods = [`Air conditioning`, `Dishwasher`, `Flat-screen TV`, `Coffee machine`, `Free WiFi`];

it(`Should room facilities render correctly`, () => {
  const {container} = render(<RoomInside goods={goods} />);
  expect(container).toMatchSnapshot();
});
