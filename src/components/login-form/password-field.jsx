import React from 'react';
import PropTypes from 'prop-types';

const PasswordField = ({onChange, password}) => {
  return (
    <input className="login__input form__input" value={password} type="password" name="password"
      placeholder="Password" required="" onChange={onChange} />
  );
};

PasswordField.propTypes = {
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordField;
