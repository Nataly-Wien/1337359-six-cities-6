import React from 'react';
import {render} from '@testing-library/react';
import ImageList from './image-list';

it(`Should photos render correctly`, () => {
  const pictures = [
    `img/img1.jpg`,
    `img/img2.jpg`,
    `img/img3.jpg`,
    `img/img4.jpg`,
    `img/img5.jpg`,
    `img/img6.jpg`,
  ];

  const {container} = render(<ImageList pictures={pictures} />);

  expect(container).toMatchSnapshot();
});
