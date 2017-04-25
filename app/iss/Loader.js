import React from 'react'
import { CardText } from 'material-ui/Card'
import CircularProgress from 'material-ui/CircularProgress'

class Loader extends React.Component {
  render() {
    return (
      <CardText style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
        <CircularProgress style={{ display: 'inline-block' }} />
        <p className="map-loader">Data is loading, please wait...</p>
      </CardText>
    )
  }
}

export default Loader
