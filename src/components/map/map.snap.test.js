import React from 'react';
import {render} from '@testing-library/react';
import Map from './map';
import {getPoints} from '../../common';

describe(`Should map component work correctly`, () => {
  it(`Should map at main page work correctly`, () => {

    const active = 1;
    const hotels = [
      {
        id: 5,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 12
          },
        },
        title: `Cityden Residences Museum Square`,
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
      },
      {
        id: 2,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 12
          },
        },
        title: `Dikker & Thijs Hotel`,
        location: {
          latitude: 52.369553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
      },
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 12
          },
        },
        title: `Hotel van de Vijsel`,
        location: {
          latitude: 52.3345345,
          longitude: 4.834534,
          zoom: 16
        },
      },
      {
        id: 6,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 12
          },
        },
        title: `Park Plaza Victoria Amsterdam`,
        location: {
          latitude: 52.391908,
          longitude: 4.85978978,
          zoom: 16
        },
      },
    ];
    const {container} = render(<Map city={hotels.length > 0 ? hotels[0].city.location : {}}
      points={getPoints(hotels)} activeMarker={active} />);

    expect(container).toMatchSnapshot();
  });

  it(`Should map at room page work correctly`, () => {
    const currentHotel = {
      id: 1,
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 12
        },
      },
      title: `Hotel van de Vijsel`,
      location: {
        latitude: 52.3345345,
        longitude: 4.834534,
        zoom: 16
      },
    };

    const {city, id, location, title} = currentHotel;

    const nearPlacesHotels = [
      {
        id: 5,
        title: `Cityden Residences Museum Square`,
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
      },
      {
        id: 2,
        title: `Dikker & Thijs Hotel`,
        location: {
          latitude: 52.369553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
      },
      {
        id: 6,
        title: `Park Plaza Victoria Amsterdam`,
        location: {
          latitude: 52.391908,
          longitude: 4.85978978,
          zoom: 16
        },
      },
    ];
    const {container} = render(<Map city={city.location}
      points={getPoints(nearPlacesHotels, {id, location, title})} activeMarker={id} />);

    expect(container).toMatchSnapshot();
  });
});
