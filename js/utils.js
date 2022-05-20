const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min +1)) + min;
};

const getRandomFloat = (min, max, digit) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return (Math.random() * (max - min) + min).toFixed(digit);
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const  numDecline = (number, array) => {
  number = Math.abs(number) % 100;
  const num = number % 10;
  if(number > 10 && number < 20) {return array[2];}
  if(num > 1 && num < 5) {return array[1];}
  if(num === 1) {return array[0];}
  return array[2];
};

export { getRandomInt, getRandomFloat, shuffleArray, numDecline, isEscapeKey };
