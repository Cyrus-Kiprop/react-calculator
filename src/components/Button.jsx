import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const Button = ({ wide, btnName, clickHandler, color }) => {
  const handleClick = (event) => {
    event.preventDefault();
    clickHandler(btnName);
  };
  const widthSize = wide ? 345 : 170;
  return (
    <div
      onClick={handleClick}
      style={{ width: widthSize, backgroundColor: color }}
      className="calc-btn"
    >
      {btnName}
    </div>
  );
};

Button.propTypes = {
  wide: PropTypes.bool,
  color: PropTypes.string,
  btnName: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: '#EFEFEF',
  wide: false,
};

export default Button;
