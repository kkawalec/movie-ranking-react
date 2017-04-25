import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Map from './Map'
import Loader from './Loader'
import { getIssPositionRequest } from './issActions'


class ISSPage extends Component {
  static propTypes = {
    getIssPositionRequest: PropTypes.func.isRequired,
    iss: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.props.getIssPositionRequest()
  }

  render() {
    const { iss, isLoading, errorMessage } = this.props
    const isEmptyData = Object.getOwnPropertyNames(iss).length < 1
    return (
      <div>
        dashboard
        { isLoading || isEmptyData ? <Loader /> :
        <Map
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
})

export default connect(mapStateToProps, { getIssPositionRequest })(ISSPage)
