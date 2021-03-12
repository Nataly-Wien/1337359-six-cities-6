import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';

const LoadWrapper = ({isDataLoaded, children}) => {
  return (
    isDataLoaded && children || <Spinner />
  );
};

LoadWrapper.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

export default LoadWrapper;
