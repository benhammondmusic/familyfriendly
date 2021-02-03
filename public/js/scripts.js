// get users GEO location
// can take a while, need to run google API map initMap() call AFTER success(). using aysnc await worked!!
async function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  status.textContent = 'Your location is displayed on the map';
  const thisPlaceLocation = { lat: parseFloat(status.dataset.lat), lng: parseFloat(status.dataset.lng) };
  const userLocation = { lat: latitude, lng: longitude };
  // status.textContent = `Lat: ${latitude} °, Lng: ${longitude} °`;
  //   mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  //   mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

  // send to google map display
  await initMap(userLocation, thisPlaceLocation);
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

const status = document.querySelector('#geo-status');

if (!navigator.geolocation) {
  status.textContent = 'Geolocation is not supported by your browser';
} else {
  status.textContent = 'Locating…';
  navigator.geolocation.getCurrentPosition(success, error);
}

// GOOGLE MAPS
// Initialize and add the map.
function initMap(userLocation, thisPlaceLocation) {
  // map centered at user
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: userLocation,
  });
  // marker positioned at USER
  console.log(userLocation, 'user');
  const userMarker = new google.maps.Marker({
    position: userLocation,
    map: map,
    title: 'Your Location',
    icon: 'http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png',
  });

  // marker positioned at THIS PLACE
  console.log(thisPlaceLocation, 'this place');
  const placeMarker = new google.maps.Marker({
    title: 'This Place',
    position: thisPlaceLocation,
    map: map,
  });
}
