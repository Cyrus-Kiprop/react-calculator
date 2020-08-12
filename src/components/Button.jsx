import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, wide, btnName }) => {
  const widthSize = wide ? 175 * 2 : 175;
  return (
    <button
      type="button"
      style={{ width: widthSize, backgroundColor: color }}
      className="calc-btn"
    >
      {btnName}
    </button>
  );
};

Button.propTypes = {
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
  btnName: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: '#F5913E',
};

export default Button;
