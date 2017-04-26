import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FlatButton from 'material-ui/FlatButton'

/**
 * Class rendering error message if this exists
 */
class ErrorMessage extends Component {
  /**
   * ErrorMessage prop types check
   */
  static propTypes = {
    message: PropTypes.string,
  }

  /**
   * Default component props
   */
  static defaultProps = {
    message: '',
  }

  /**
   * Rendering error message or null if there is no message
   */
  render() {
    const { message } = this.props

    if (!message.length) {
      return null
    }

    return (
      <FlatButton label={message} secondary />
    )
  }
}

export default ErrorMessage
