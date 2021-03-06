import React from 'react';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AuthorizationStatus} from '../../const';

const withAuth = (Component) => {
  const wrapper = ({isAuth, ...props}) => {
    return isAuth && <Component {...props} />;
  };

  const mapStateToProps = (state) => ({
    isAuth: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  });

  return connect(mapStateToProps)(wrapper);
};

export default withAuth;
