import React from 'react';
import PropTypes from 'prop-types'

export default class Button extends React.Component {
  render() {
  const { btnName } = this.props
    return (
      <div>
        { btnName }
      </div>
    )
  }
}

Button.propTypes = {
  btnName: PropTypes.string,
}
