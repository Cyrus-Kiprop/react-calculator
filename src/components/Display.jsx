import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, operation }) => {
  const length = result.length
  const fonts = length > 25 ? '0.5em' : '1em'
  return (
  <div className="result">
    <span className="operand">{operation}</span>
    <p value={result} style={{fontSize: fonts,wordWrap: 'break-word'}}>{result}</p>
  </div>
)
}

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  operation: ' ',
};

export default Display;
