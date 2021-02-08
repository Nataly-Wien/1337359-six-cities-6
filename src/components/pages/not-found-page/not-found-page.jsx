import React from 'react';
// import PropTypes from 'prop-types';
// import {NOT_AUTHORIZED_USERNAME} from '../../../const';
import Header from '../../header/header';

const NotFoundPage = () => {
  const isMainPage = false;

  return (
    <div className="page page--favorites-empty">
      <Header isMainPage={isMainPage} />
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

// NotFoundPage.propTypes = {
//   isAuthorized: PropTypes.bool,
//   userName: PropTypes.string,
// };

export default NotFoundPage;
