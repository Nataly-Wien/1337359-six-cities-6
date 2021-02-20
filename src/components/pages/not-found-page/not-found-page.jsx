import React from 'react';
import {Types} from '../../../const';
import Header from '../../header/header';

const NotFoundPage = () => {
  return (
    <div className="page page--favorites-empty">
      <Header page={Types.NOT_MAIN_PAGE} />
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

export default NotFoundPage;
