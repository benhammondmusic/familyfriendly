// get users GEO location
// can take a while, need to run google API map initMap() call AFTER success(). using aysnc await worked!!
async function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  status.textContent = 'Your location is displayed on the map';

  // set USER lat/lng
  userLocation = { lat: latitude, lng: longitude };

  // send to google map display
  await initMap(userLocation, mapPlaces);
}

function error() {
  status.textContent = 'Error - OS and browser must allow geolocation';
  // call google maps with a default position if browser supported but still an error (maybe user is blocking geolocation)
  initMap(userLocation, mapPlaces);
}

/* 
 STARTS HERE
 */
// const status = document.querySelector('#geo-status');
// const geoDataEls = document.querySelectorAll('.geo-data');

// if (!navigator.geolocation) {
//   status.textContent = 'Geolocation is not supported by your browser';
// } else {
//   status.textContent = 'Locating…';
//   navigator.geolocation.getCurrentPosition(success, error);
// }
