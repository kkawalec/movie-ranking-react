import React, { Component } from 'react'
import { CardText } from 'material-ui/Card'
import CircularProgress from 'material-ui/CircularProgress'

/**
 * Class showing loader if http request is pending
 */
class Loader extends Component {
  /**
   * Render simple loader
   */
  render() {
    return (
      <CardText style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
        <CircularProgress style={{ display: 'inline-block' }} />
        <p className="loader">Data is loading, please wait...</p>
      </CardText>
    )
  }
}

export default Loader
