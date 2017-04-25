import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FlatButton from 'material-ui/FlatButton'

class ErrorMessage extends Component {
  static propTypes = {
    message: PropTypes.string,
  }

  static defaultProps = {
    message: '',
  }

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
