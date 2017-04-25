import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GoogleMap from 'react-google-map'
import GoogleMapLoader from 'react-google-maps-loader'

import issIcon from '../../img/iss.png'
import config from '../config'

class Map extends Component {
  static propTypes = {
    googleMaps: PropTypes.object.isRequired,
  }

render() {
  const { googleMaps, lat, lng } = this.props
  console.log(googleMaps.Animation)
  return (
  <div className="google-map">
    <GoogleMap
      googleMaps={googleMaps}
      // You can add and remove coordinates on the fly.
      // The map will rerender new markers and remove the old ones.
      coordinates={[
        {
          title: "ISS position",
          icon: issIcon,
          position: {
            lat,
            lng,
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            marker.setAnimation(googleMaps.Animation.BOUNCE)

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div>
                  <h3>ISS<h3>
                  <div>
                    Lorem ipsum
                  </div>
                </div>
              `,
            })

            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, "click", () => {
              infoWindow.open(map, marker)
            })
          },
        }
      ]}
      center={{lat, lng}}
      zoom={4}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.HYBRID)
      }}
    />
  </div>
) }
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: config.googleMapsKey,
})
