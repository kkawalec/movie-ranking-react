import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import Subheader from 'material-ui/Subheader'

import Map from './Map'
import Loader from './Loader'
import Addresses from './Addresses'
import ErrorMessage from './ErrorMessage'
import RefreshButton from './RefreshButton'
import { getIssPositionRequest } from './issActions'

/**
 * Class rendering main page of the app
 */
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

  /**
   * Handling refresh request
   */
  handleRefresh = (e) => {
    e.preventDefault()
    this.props.getIssPositionRequest()
  }

  render() {
    const { iss, isLoading, errorMessage, addressData } = this.props
    const isGeoData = Object.getOwnPropertyNames(iss).length > 1
    return (
      <Row>
        <Col xs={12} lg={6} style={{ marginBottom: 15 }}>
          <Subheader>Current location of ISS</Subheader>
          <RefreshButton handleRefresh={this.handleRefresh} isLoading={isLoading} />
          <ErrorMessage message={errorMessage} />
          <Addresses data={addressData} />
          { isLoading && <Loader /> }
        </Col>
        <Col xs={12} lg={6}>
          { isGeoData && <Map lat={iss.latitude} lng={iss.longitude} /> }
        </Col>
      </Row>
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
