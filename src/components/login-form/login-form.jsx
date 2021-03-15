import React, {useState} from 'react';
import {useHistory} from 'react-router';
import PropTypes from 'prop-types';
import LoginField from './login-field';
import PasswordField from './password-field';
import {Routes} from '../../const';

const LoginForm = ({signIn}) => {
  const history = useHistory();

  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);

  const onLoginChange = (evt) => setLogin(evt.target.value);
  const onPasswordChange = (evt) => setPassword(evt.target.value);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    signIn({login, password});

    if (history.length > 2) {
      history.goBack();
    } else {
      history.push(Routes.HOME);
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
    </form>
  );
};

LoginForm.propTypes = {
  signIn: PropTypes.func,
};

export default LoginForm;
