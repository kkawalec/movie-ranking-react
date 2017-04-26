import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GoogleMap from 'react-google-map'
import GoogleMapLoader from 'react-google-maps-loader'

import config from '../config'
import issIcon from '../../img/iss.png'
import googleMapsOnLoad from './utils/googleMapsOnLoad'

/**
 * Class wrapping GoogleMap Component
 */
class Map extends Component {
  static propTypes = {
    googleMaps: PropTypes.object.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }

  render() {
    const { googleMaps, lat, lng } = this.props

    return (
      <div className="google-map">
        <GoogleMap
          googleMaps={googleMaps}
          coordinates={[
            {
              title: 'ISS',
              icon: issIcon,
              position: {
                lat,
                lng,
              },
              onLoaded: googleMapsOnLoad,
            },
          ]}
          center={{ lat, lng }}
          zoom={4}
          onLoaded={(gMaps, map) => {
            map.setMapTypeId(gMaps.MapTypeId.HYBRID)
          }}
        />
      </div>
    )
  }
}

export default GoogleMapLoader(Map, {
  libraries: ['places'],
  key: config.googleMapsKey,
})
