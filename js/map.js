import { offers}  from './data.js';
import { renderCard } from './offer-card.js';

const address = document.querySelector('#address');

const Map = {
  COPYRIGHT: '&copy; <a href="https://wwww.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  TILE: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ZOOM: 12.45
};

const MAIN_LOCATION = {
  lat: 35.675178,
  lng: 139.748876,
};

const getLocationToString = (obj, number) => {
  let {lat, lng} = obj;
  lat = Number(lat.toFixed(number));
  lng = Number(lng.toFixed(number));
  return `${lat}, ${lng}`;
};

const map = L.map('map-canvas').on('load', () => {
})
  .setView(MAIN_LOCATION, Map.ZOOM);

L.tileLayer(
  Map.TILE,
  {
    attribution: Map.COPYRIGHT,
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  MAIN_LOCATION,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
marker.addTo(map);
address.value = getLocationToString(marker.getLatLng(), 5);

marker.on('move', (evt) => {
  address.value = getLocationToString(evt.target.getLatLng(), 5);
});

const adPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

offers.forEach((offer) => {
  const {
    location: {
      lat,
      lng
    }
  } = offer;
  const adPin = L.marker({
    lat,
    lng
  },
  {
    draggable: false,
    icon: adPinIcon
  });
  adPin.addTo(map).bindPopup(renderCard(offer));
});

const resetMainPin = () => {
  marker.setLatLng(MAIN_LOCATION);
  map.setView(MAIN_LOCATION, Map.ZOOM);
  address.setAttribute('value', getLocationToString(marker.getLatLng(), 5));
  map.closePopup();
};

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === 'Escape') {
    document.querySelector('.leaflet-popup-close-button').click();
  }
});

export { resetMainPin };
