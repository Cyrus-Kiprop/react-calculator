import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, operation }) => (
  <div className="result">
    <span className="operand">{operation}</span>
    <h1>{result}</h1>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  operation: ' ',
};

export default Display;
