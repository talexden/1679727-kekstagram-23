import {sendData} from '../server/api.js';
import {UPLOAD_FORM} from '../constants.js';


const setImageFormSubmit = (onSuccess, onError) => {
  UPLOAD_FORM.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onError(),
      new FormData(evt.target),
    );
  });
};


export {setImageFormSubmit};
