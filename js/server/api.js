import {INCOMING_SERVER_ADDRESS, OUTGOING_SERVER_ADDRESS} from '../constants.js';
import {snowImageFilters} from '../gallery/filter-picture.js';

let picturesData;

const getData = (onSuccess, onFail) => {

  fetch(INCOMING_SERVER_ADDRESS)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((data) => {
      picturesData = data;
      snowImageFilters();
      onSuccess(picturesData);
    })
    .catch(() => {
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
    .catch(() => {
      onFail();
    });
};

const getPicturesData = () => picturesData;


export {getData, sendData, getPicturesData};
