import React from 'react';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';

const withAuth = (Component) => {
  const wrapper = ({isAuth, ...props}) => {
    return isAuth && <Component {...props} />;
  };

  const mapStateToProps = ({USER}) => ({
    isAuth: USER.authorizationStatus === AuthorizationStatus.AUTH,
  });

  return connect(mapStateToProps)(wrapper);
};

export default withAuth;
