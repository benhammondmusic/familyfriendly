function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = `Lat: ${latitude} °, Long: ${longitude} °`;
  //   mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  //   mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
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
