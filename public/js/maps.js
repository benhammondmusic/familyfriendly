// GOOGLE MAPS
// Initialize and add the map.
function initMap(userLocation, mapPlaces) {
  // map centered at user
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: mapPlaces.length === 1 ? mapPlaces[0].latLng : userLocation,
  });
  // marker positioned at USER
  const userMarker = new google.maps.Marker({
    position: userLocation,
    map: map,
    title: 'Your Location',
    icon: 'http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png',
  });

  // markers positioned at PLACE(S)
  mapPlaces.forEach((mapPlace) => {
    const placeMarker = new google.maps.Marker({
      title: mapPlace.title,
      position: mapPlace.latLng,
      map: map,
    });
  });
}
