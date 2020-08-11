import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  render() {
  const { color, wide, btnName } = this.props;
  const styleColor = ['/', 'X', '-', '+', '='].includes(btnName) ? color[0] :color[1]
  const widthSize = (btnName === '0' ?  345 : wide)
    return <div style={{width: widthSize, backgroundColor: styleColor}} className="calc-btn">{btnName}</div>;
  }
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};
