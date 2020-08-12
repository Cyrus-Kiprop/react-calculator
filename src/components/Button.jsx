import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const Button = ({ wide, btnName, clickHandler, color }) => {
  const handleClick = (event) => {
    event.preventDefault();
    clickHandler(btnName);
  };
  const widthSize = wide ? 175 * 2 : 175;
  return (
    <button
      onClick={() => clickHandler(btnName)}
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
  clickHandler: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: '#F5913E',
};

export default Button;
