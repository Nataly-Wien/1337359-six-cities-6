import React from 'react';
import {render} from '@testing-library/react';
import Host from './host';

it(`Should hotel host render correctly`, () => {
  const description = `In the center of Paris, is a 10-minute walk from Notre-Dame Cathedral and 293 m from Saint-Michel Metro Station. It features a fitness room and free Wi-Fi access.`;
  const host = {
    id: 1,
    name: `Mick`,
    isPro: true,
    avatarUrl: `img/avatar.jpg`
  };

  const {container} = render(<Host description={description} host={host} />);

  expect(container).toMatchSnapshot();
});
