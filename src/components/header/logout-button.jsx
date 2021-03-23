import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../../hoc/with-auth/with-auth';

const LogoutButton = ({onLogoutClick}) => {
  return (
    <button className="button" onClick={onLogoutClick}
      style={{marginLeft: `10px`, width: `18px`, height: `18px`, backgroundImage: `url(../img/logout.svg)`}}></button>
  );
};

LogoutButton.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
};

export default withAuth(LogoutButton);
