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

address.value = getLocationToString(MAIN_LOCATION, 5);

export { address };
