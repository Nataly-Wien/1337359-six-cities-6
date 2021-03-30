import React from 'react';
import {render} from '@testing-library/react';
import Reviews from './reviews';

it(`Should reviews render correctly`, () => {
  const reviews = [
    {
      id: 1,
      user: {
        id: 6,
        isPro: true,
        name: `Carlo`,
        avatarUrl: `img/avatar1.jpg`
      },
      rating: 5,
      comment: `Cannot fault the hotel for cleanliness and friendliness of staff, who attended to anything we asked. The hotel facilities were great and the breakfast was really good value and lots of choice.`,
      date: `2020-11-27T09:09:35.123Z`
    },
    {
      id: 2,
      user: {
        id: 11,
        isPro: true,
        name: `Liz`,
        avatarUrl: `img/avatar2.jpg`
      },
      rating: 3,
      comment: `Excellent location, just across the river from the Louvre and couple of minutes away from dozens of cafes and restaurants.`,
      date: `2021-02-23T11:17:25.810Z`
    },
  ];

  const {container} = render(<Reviews reviews={reviews} />);

  expect(container).toMatchSnapshot();
});
