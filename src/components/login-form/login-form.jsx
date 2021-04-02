import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoginField from './login-field';
import PasswordField from './password-field';
import {getLoginErrorStatus} from '../../store/user/selectors';
import {ActionCreator} from '../../store/action';

const LoginForm = ({signIn, isLoginError, onLoginFormIncorrect}) => {
  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);

  const onLoginChange = (evt) => setLogin(evt.target.value);
  const onPasswordChange = (evt) => setPassword(evt.target.value);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (login !== `` && password !== ``) {
      signIn({login, password});
    } else {
      onLoginFormIncorrect();
    }
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <LoginField login={login} onChange={onLoginChange} />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <PasswordField password={password} onChange={onPasswordChange} />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
      {isLoginError && <div className="reviews__text" style={{
        fontWeight: `bold`,
        width: `90%`,
        marginTop: `15px`
      }}>Please enter correct and not empty login and password</div>}
    </form>
  );
};

LoginForm.propTypes = {
  signIn: PropTypes.func,
  isLoginError: PropTypes.bool.isRequired,
  onLoginFormIncorrect: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLoginError: getLoginErrorStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoginFormIncorrect: () => dispatch(ActionCreator.loginFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
