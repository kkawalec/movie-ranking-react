import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Map from './Map'
import Loader from './Loader'
import Addresses from './Addresses'
import { getIssPositionRequest } from './issActions'


class ISSPage extends Component {
  static propTypes = {
    getIssPositionRequest: PropTypes.func.isRequired,
    iss: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    addressData: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.getIssPositionRequest()
  }

  render() {
    const { iss, isLoading, errorMessage, addressData } = this.props
    const isGeoData = Object.getOwnPropertyNames(iss).length > 1
    return (
      <div>
        dashboard
        <Addresses data={addressData} />
        { isLoading && <Loader /> }
        { isGeoData && <Map
          lat={iss.latitude}
          lng={iss.longitude}
        /> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  iss: state.iss.data,
  isLoading: state.iss.loading,
  errorMessage: state.iss.error,
  addressData: state.iss.addressData,
})

export default connect(mapStateToProps, { getIssPositionRequest })(ISSPage)
