import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../../store/api-actions';
import {HeaderTypes, AuthorizationStatus, Routes} from '../../const';
import {ActionCreator} from '../../store/action';

const Header = ({page, authorizationStatus, user, onLogoutClick}) => {

  const {email, avatarUrl} = user;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={Routes.HOME} className={`header__logo-link${HeaderTypes[page].logoClassName}`}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user" style={{display: `flex`}}>
                <Link to={Routes.FAVORITES} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${avatarUrl})`}}>
                  </div>
                  <span className="header__user-name user__name">{authorizationStatus === AuthorizationStatus.AUTH ? email : `Sign in`}</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.AUTH && <button className="button" onClick={onLogoutClick}
                  style={{marginLeft: `10px`, width: `18px`, height: `18px`, backgroundImage: `url(../img/logout.svg)`}}></button>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  page: PropTypes.string.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }),
  authorizationStatus: PropTypes.string.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick: () => {
    dispatch(logout());
    dispatch(ActionCreator.resetFavorites());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
