import { getRandomInt, getRandomFloat, shuffleArray } from './utils.js';

const offerCount = 10;
const AVATAR = [];

const getRandomImg = (count = 10) => {
  while (AVATAR.length < count) {
    const index = getRandomInt(1, 11);
    if (!AVATAR.includes(index)) {
      AVATAR.push(index < 10 ? `0${index}` : index);
    }
  }
};
const TITLES = [
  'Квартира',
  'Комната',
  'Загородный дом',
  'Отель',
  'Апартаменты',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'parking',
  'dishwasher',
  'washer',
  'elevator',
  'conditioner'
];
const DESCRIPTION = [
  'чисто',
  'уютно',
  'просторно',
  'хороший вид из окна',
  'высокие потолки',
  'евроремонт',
  'светлая',
  'рядом с метро',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const addOffer = () => ({
  author: {
    avatar: `img/avatars/user${getRandomImg(), AVATAR[0]}.png`
  },
  offer: {
    title: TITLES[getRandomInt(0, (TITLES.length -1))],
    address: `${getRandomFloat(LAT_MIN, LAT_MAX, 5)}, ${getRandomFloat(LNG_MIN, LNG_MAX, 5)}`,
    price: getRandomInt(1000, 10000),
    type: TYPES[getRandomInt(0, (TYPES.length -1))],
    rooms: getRandomInt(0, 3),
    guests: getRandomInt(0, 3),
    checkin: CHECKINS[getRandomInt(0, (CHECKINS.length -1))],
    checkout: CHECKOUTS[getRandomInt(0, (CHECKOUTS.length -1))],
    features: shuffleArray(FEATURES).slice(0, getRandomInt(0, FEATURES.length -1)),
    description: shuffleArray(DESCRIPTION).slice(0, getRandomInt(0, DESCRIPTION.length -1)),
    photos: shuffleArray(PHOTOS).slice(0, getRandomInt(0, PHOTOS.length -1)),
  },
  location: {
    lat: getRandomFloat(LAT_MIN, LAT_MAX, 5),
    lng: getRandomFloat(LNG_MIN, LNG_MAX, 5)
  },
});

const offers = Array.from({length: offerCount}, addOffer);

export { offers };


