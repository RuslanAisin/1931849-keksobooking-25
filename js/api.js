import { resetForm } from './form.js';

const GET_URL = 'https://25.javascript.pages.academy/keksobooking/data';
const POST_URL = 'https://25.javascript.pages.academy/keksobooking';

const timeout = 3000;

const showErrorMsg = (message) => {
  const msgContainer = document.createElement('div');
  msgContainer.style.backgroundColor = 'red';
  msgContainer.textContent = message;
  document.body.append(msgContainer);
  setTimeout(() => {
    msgContainer.remove();
  },
  timeout);
};

const getAd = async (onError) => {
  let response;
  try {
    response = await fetch(
      GET_URL, {
        method: 'GET',
        credentials: 'same-origin',
      },
    );
  }
  catch (err) {
    onError();
    return [];
  }
  const allAd = await response.json();
  return allAd;
};

const postAd = (onSuccess, onError, body) => {
  fetch (
    POST_URL, {
      method: 'POST',
      body,
    }
  ).then((response) => {
    if (response.statusCode === 200) {
      onSuccess();
      resetForm();
    } else {
      onError('Ошибка отправки объявления, попробуйте еще раз');
    }
  }).catch(() => {
    onError('Что-то сломалось, попробуйте еще раз');
  });
};

export { showErrorMsg, getAd, postAd };
