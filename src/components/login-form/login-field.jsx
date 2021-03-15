import React from 'react';
import PropTypes from 'prop-types';

const LoginField = ({onChange, login}) => {
  return (
    <input className="login__input form__input" value={login} type="email" name="email" placeholder="Email"
      required="" onChange={onChange} />
  );
};

LoginField.propTypes = {
  login: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginField;
