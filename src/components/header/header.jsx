import React from 'react';
import PropTypes from 'prop-types';
import {NOT_AUTHORIZED_USERNAME} from '../../const';

const Header = (props) => {
  const {isMainPage, isAuthorized, userName} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className={`header__logo-link${isMainPage ? ` header__logo-link--active` : ``}`}
              href={!isMainPage ? `main.html` : null}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className={isAuthorized ? `header__user-name user__name` : `header__login`}>{userName}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMainPage: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool,
  userName: PropTypes.string,
};

Header.defaultProps = {
  isAuthorized: false,
  userName: NOT_AUTHORIZED_USERNAME,
};

export default Header;
