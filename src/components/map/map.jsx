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

    setMarkers(mapRef.current, points, activeMarker);

    return () => mapRef.current.remove();
  }, [city]);

  useEffect(() => {
    removeMarkers(mapRef.current);
    setMarkers(mapRef.current, points, activeMarker);
  }, [activeMarker]);

  const setMarkers = (map, cards, activeCard) => {
    cards.forEach((card) => {
      const customIcon = card.id === activeCard ? MAP_ICON_ACTIVE : MAP_ICON;

      leaflet.marker({
        lat: card.location.latitude,
        lng: card.location.longitude,
      }, {
        icon: leaflet.icon(customIcon),
        title: card.title,
      }).addTo(map)
        .bindPopup(card.title);
    });
  };

  const removeMarkers = (map) => {
    map.eachLayer((layer) => {
      if (layer instanceof leaflet.Marker) {
        layer.remove();
      }
    });
  };

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
