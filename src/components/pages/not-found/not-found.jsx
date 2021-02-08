import React from 'react';
import PropTypes from 'prop-types';
import {NOT_AUTHORIZED_USERNAME} from '../../../const';
import Header from '../../header/header';

const NotFound = (props) => {
  const {isAuthorized, userName} = props;
  const isMainPage = false;

  return (
    <div className="page page--favorites-empty">
      <Header isMainPage={isMainPage} isAuthorized={isAuthorized} userName={userName} />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper" style={{backgroundImage: `none`}}>
              <b className="favorites__status">404 <small>Not Found</small></b>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

NotFound.propTypes = {
  isAuthorized: PropTypes.bool,
  userName: PropTypes.string,
};

NotFound.defaultProps = {
  isAuthorized: false,
  userName: NOT_AUTHORIZED_USERNAME,
};

export default NotFound;
