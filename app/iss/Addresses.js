import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Address from './Address'

class Addresses extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props
    console.log(data);
    return (
      <div>
        { data.map(location => <Address key={location.place_id} location={location} /> )}
      </div>
    )
  }
}

export default Addresses
