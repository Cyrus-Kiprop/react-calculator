import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const Button = ({ color, wide, btnName }) => {
  const styleColor = ['/', 'X', '-', '+', '='].includes(btnName)
    ? color[0]
    : color[1];
  const widthSize = btnName === '0' ? 345 : wide;
  return (
    <div
      style={{ width: widthSize, backgroundColor: styleColor }}
      className="calc-btn"
    >
      {btnName}
    </div>
  );
};

Button.propTypes = {
  wide: PropTypes.number.isRequired,
  color: PropTypes.objectOf(PropTypes.object()).isRequired,
  btnName: PropTypes.string.isRequired,
};

export default Button;
