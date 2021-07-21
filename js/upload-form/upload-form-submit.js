import {sendData} from '../server/api.js';
import {UPLOAD_FORM} from '../constants.js';


const onSubmitEvent = (onSuccess, onError) => function (evt) {
  evt.preventDefault();
  sendData(
    () => onSuccess(),
    () => onError(),
    new FormData(evt.target),
  );
};


const setImageFormSubmit = (onSuccess, onError) => {
  UPLOAD_FORM.addEventListener('submit', onSubmitEvent(onSuccess, onError));
};


export {setImageFormSubmit};
