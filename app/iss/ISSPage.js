import React from 'react'
import { connect } from 'react-redux'

import Map from './Map'
import { getIssPositionRequest } from './issActions'


class ISSPage extends React.Component {

  componentDidMount() {
    this.props.getIssPositionRequest()
  }

  render() {
    const { iss, isLoading, errorMessage } = this.props
    const isEmptyData = Object.getOwnPropertyNames(iss).length < 1
    return (
      <div>
        dashboard
        { isLoading || isEmptyData ? 'loading' : <Map
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
