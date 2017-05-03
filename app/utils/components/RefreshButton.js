import PropTypes from 'prop-types'
import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

/**
 * Class rendering refresh button component
 */
class RefreshButton extends Component {
  /**
   * prop types of RefreshButton component
   */
  static propTypes = {
    handleRefresh: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  /**
   * rendering button
   */
  render() {
    const { handleRefresh, isLoading } = this.props

    return (
      <RaisedButton
        label="Refresh"
        secondary
        onClick={handleRefresh}
        disabled={isLoading}
        style={{ marginBottom: 10, marginRight: 10 }}
      />
    )
  }
}

export default RefreshButton
