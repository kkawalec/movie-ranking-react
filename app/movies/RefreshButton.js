import PropTypes from 'prop-types'
import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

/**
 * Class rendering main page of the app
 */
class RefreshButton extends Component {
  static propTypes = {
    handleRefresh: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  render() {
    const { handleRefresh, isLoading } = this.props

    return (
      <RaisedButton
        label="Refresh"
        secondary
        onClick={handleRefresh}
        disabled={isLoading}
        style={{ marginBottom: 10 }}
      />
    )
  }
}

export default RefreshButton
