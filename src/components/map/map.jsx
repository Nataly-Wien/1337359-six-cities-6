import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {LeafletConst, mapIconSize, mapIconUrl, mapIconActiveUrl} from '../../const';

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
      const customIcon = leaflet.icon({
        iconUrl: point.id === activeMarker ? mapIconActiveUrl : mapIconUrl,
        iconSize: mapIconSize,
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude,
      }, {
        icon: customIcon
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
