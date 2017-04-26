import issInfoWindowTemplate from './issInfoWindowTemplate'

export default (gMaps, map, marker) => {
  // Set Marker animation
  marker.setAnimation(gMaps.Animation.BOUNCE)

  // Define Marker InfoWindow
  const infoWindow = new gMaps.InfoWindow({
    content: issInfoWindowTemplate,
  })

  // Open InfoWindow when Marker will be clicked
  gMaps.event.addListener(marker, 'click', () => {
    infoWindow.open(map, marker)
  })
}
