import React, {useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getLoadingErrorStatus} from '../../../store/data/selectors';
import {Types} from '../../../const';
import Header from '../../header/header';
import LoginForm from '../../login-form/login-form';
import {login} from '../../../store/api-actions';
import ErrorWrapper from '../../error-wrapper/error-wrapper';
import {ActionCreator} from '../../../store/action';

const LoginPage = ({signInHandler, isLoadingError, onPageLoad}) => {
  useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <div className="page page--gray page--login">
      <Header page={Types.NOT_MAIN_PAGE} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <ErrorWrapper isLoadingError={isLoadingError} >
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <LoginForm signIn={signInHandler} />
            </section >
          </ErrorWrapper>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div >
  );
};

LoginPage.propTypes = {
  signInHandler: PropTypes.func,
  isLoadingError: PropTypes.bool.isRequired,
  onPageLoad: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  signInHandler: (user) => dispatch(login(user)),
  onPageLoad: () => dispatch(ActionCreator.resetLoginError()),
});

const mapStateToProps = (state) => ({
  isLoadingError: getLoadingErrorStatus(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
