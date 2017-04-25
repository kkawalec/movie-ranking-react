import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Address extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  render() {
    const { location } = this.props
    return (
      <div>
        { location.formatted_address }
      </div>
    )
  }
}

export default Address
