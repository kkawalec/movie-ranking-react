import React from 'react'
import { connect } from 'react-redux'

import Map from './Map'
import { getIssPositionRequest } from './issActions'


class ISSPage extends React.Component {

  componentDidMount() {
    this.props.getIssPositionRequest()
  }

  render() {
    return (
      <div>
        dashboard
        <Map
  />
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { getIssPositionRequest })(ISSPage)
