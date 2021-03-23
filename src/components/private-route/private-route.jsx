import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user/selectors';

const PrivateRoute = ({component: Component, currentAuthStatus, permittedAuthStatus, permittedPath, ...rest}) => {

  return (<Route
    {...rest}
    render={(props) => currentAuthStatus === permittedAuthStatus ? <Component {...props} /> :
      <Redirect to={permittedPath} />} />);
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  currentAuthStatus: PropTypes.string.isRequired,
  permittedAuthStatus: PropTypes.string.isRequired,
  permittedPath: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentAuthStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps, null)(PrivateRoute);
