import {showAlert} from './alerts.js';


const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((picturesData) => {
      onSuccess(picturesData);
    })
    .catch(() => {
      showAlert('update-fail');
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};


export {getData, sendData};
