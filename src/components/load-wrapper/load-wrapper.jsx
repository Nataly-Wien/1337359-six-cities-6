import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';

const LoadWrapper = ({isDataLoading, children}) => {
  return (
    !isDataLoading && children || <Spinner />
  );
};

LoadWrapper.propTypes = {
  isDataLoading: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

export default LoadWrapper;
