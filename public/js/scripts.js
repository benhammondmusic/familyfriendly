// get users GEO location
// can take a while, need to run google API map initMap() call AFTER success(). using aysnc await worked!!
async function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  status.textContent = 'Your location is displayed on the map';

  // create new array of place lat/lng based off array of data elements containg the same
  const mapPlaces = [...geoDataEls].map((el) => {
    const latLng = {};
    const location = {};
    latLng.lat = parseFloat(el.dataset.lat);
    latLng.lng = parseFloat(el.dataset.lng);
    location.latLng = latLng;
    location.title = el.dataset.name;

    return location;
  });

  // make object out of USER lat/lng
  const userLocation = { lat: latitude, lng: longitude };

  // send to google map display
  await initMap(userLocation, mapPlaces);
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

/* 
 STARTS HERE
 */
const status = document.querySelector('#geo-status');
const geoDataEls = document.querySelectorAll('.geo-data');

if (!navigator.geolocation) {
  status.textContent = 'Geolocation is not supported by your browser';
} else {
  status.textContent = 'Locating…';
  navigator.geolocation.getCurrentPosition(success, error);
}

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
