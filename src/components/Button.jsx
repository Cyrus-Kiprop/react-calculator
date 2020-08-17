import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const Button = ({ wide, btnName, handleClick, color }) => {
  const widthSize = wide ? 175 * 2 : 175;
  return (
    <button
      onClick={() => handleClick(btnName)}
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
  handleClick: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: '#F5913E',
};

export default Button;
