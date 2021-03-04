import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {LeafletConst, MAP_ICON, MAP_ICON_ACTIVE} from '../../const';

import "leaflet/dist/leaflet.css";

const Map = ({city, points, activeMarker}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.latitude,
        lng: city.longitude,
      },
      zoom: city.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(LeafletConst.TITLE_LAYER, {attribution: LeafletConst.ATTRIBUTION})
      .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = point.id === activeMarker ? MAP_ICON_ACTIVE : MAP_ICON;

      leaflet
        .marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: leaflet.icon(customIcon),
          title: point.title,
        })
        .addTo(mapRef.current)
        .bindPopup(point.title);
    });

    return () => mapRef.current.remove();
  });

  return (
    <div id="map" ref={mapRef} style={{height: `100%`, width: `100%`}} ></div>
  );
};

Map.propTypes = {
  city: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  points: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired
  })),
  activeMarker: PropTypes.number.isRequired,
};

export default Map;
