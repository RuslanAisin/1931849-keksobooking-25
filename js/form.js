import { address } from "./map.js";

const TypeOfHouse = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const NumberOfGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const adForm = document.querySelector('.ad-form');
const formElements = document.querySelectorAll('fieldset, .map__filter, .ad-form__slider');
const mapFilters = document.querySelector('.map__filters');
const price = adForm.querySelector('#price');
const typeHousing = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const guestNumber = capacity.querySelectorAll('option');
const time = adForm.querySelector('.ad-form__element--time');

// on/off form
const setDisabledState = () => {
  formElements.forEach((item) => (item.disabled = !item.disabled));
};

const setActiveState = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  setDisabledState();
};

const setInactiveState = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  setDisabledState();
};

// Pristine validation
const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-message'
});

const validateRooms = () => {
  const roomValue = roomNumber.value;
  guestNumber.forEach((guest) => {
    const isDisabled = (NumberOfGuests[roomValue].indexOf(guest.value) === -1);
    guest.selected = NumberOfGuests[roomValue] [0] === guest.value;
    guest.disabled = isDisabled;
    guest.hidden = isDisabled;
  });
};

validateRooms();

const onRoomNumberChange = () => {
  validateRooms();
};

roomNumber.addEventListener('change', onRoomNumberChange);

time.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

const validateMinPrice = () => {
  price.placeholder = TypeOfHouse[typeHousing.value];
  pristine.validate();
};

typeHousing.addEventListener('change', validateMinPrice);

const checkMinPrice = () => Number(price.value) >= Number(price.placeholder);
const getPriceErrorMessage = () => `Минимальная цена ${price.placeholder} рублей`;
pristine.addValidator(price, checkMinPrice, getPriceErrorMessage);

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault(); // строку выше для отправки на сервер
  }
  else {
    return true;
  }
});

export { setActiveState, setInactiveState};
