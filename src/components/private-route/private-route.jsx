import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, currentAuthStatus, permittedAuthStatus, permittedPath, ...rest}) =>
  <Route
    {...rest}
    render={(props) => currentAuthStatus === permittedAuthStatus ? <Component {...props} /> : <Redirect to={permittedPath} />} />
  ;

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  currentAuthStatus: PropTypes.string.isRequired,
  permittedAuthStatus: PropTypes.string.isRequired,
  permittedPath: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentAuthStatus: state.authorizationStatus
});

export default connect(mapStateToProps, null)(PrivateRoute);
