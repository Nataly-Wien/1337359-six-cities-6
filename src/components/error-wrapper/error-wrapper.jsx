import React from 'react';
import PropTypes from 'prop-types';
import Error from '../error/error';

const ErrorWrapper = ({isLoadingError, children}) => {
  return (
    !isLoadingError && children || <Error />
  );
};

ErrorWrapper.propTypes = {
  isLoadingError: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

export default ErrorWrapper;
