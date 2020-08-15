import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const Button = ({ btnName }) => <div>{btnName}</div>;

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
