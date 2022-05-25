const address = document.querySelector('#address');

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
  address.value = getLocationToString(MAIN_LOCATION, 5);
})
  .setView({
    lat: 35.675178,
    lng: 139.748876,
  }, 12.45);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://wwww.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker({
  lat: 35.675178,
  lng: 139.748876,
},
{
  draggable: true,
  icon: mainPinIcon,
}
)

export { address };
