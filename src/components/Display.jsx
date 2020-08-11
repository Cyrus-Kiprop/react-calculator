import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Display extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div className="result">
        <h1>{result}</h1>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};
