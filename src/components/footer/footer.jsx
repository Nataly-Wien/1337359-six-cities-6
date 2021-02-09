import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const {isMainPage} = props;

  return (
    <footer className="footer container">
      <a className="footer__logo-link" href={isMainPage ? `main.html` : null}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </footer>
  );
};

Footer.propTypes = {
  isMainPage: PropTypes.bool.isRequired,
};

export default Footer;
