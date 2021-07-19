import {INCOMING_SERVER_ADDRESS, OUTGOING_SERVER_ADDRESS} from '../constants.js';

const getData = (onSuccess) => {
  fetch(INCOMING_SERVER_ADDRESS)
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
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      onFail();
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    OUTGOING_SERVER_ADDRESS,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} — ${response.statusText}`);
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      onFail();
    });
};


export {getData, sendData};
