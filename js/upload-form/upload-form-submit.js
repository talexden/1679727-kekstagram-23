import {sendData} from '../server/api.js';
import {uploadForm} from '../constants.js';


const sendFormData = (onSuccess, onError) => (evt) => {
  evt.preventDefault();
  sendData(onSuccess, onError, new FormData(evt.target));
};


const setImageFormSubmit = (onSuccess, onError) => {
  uploadForm.addEventListener('submit', sendFormData(onSuccess, onError));
};


export {setImageFormSubmit};
