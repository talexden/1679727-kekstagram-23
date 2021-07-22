import {
  body,
  descriptionInput,
  hashtagInput,
  uploadForm,
  uploadInput
} from '../constants.js';

import {isEscEvent} from '../utils/utils.js';
import {validityHashtagsString, validityDescription, resetHashtag, resetDescription} from './upload-form-validation.js';
import {showAlert} from '../server/alerts.js';
import {resetEffects} from '../effect/effects.js';

const uploadFormModal = uploadForm.querySelector('.img-upload__overlay');
const uploadFormCancel = uploadForm.querySelector('.img-upload__cancel');


const resetFileInput = () => {
  uploadInput.value = '';
};

const resetUploadForm = () => {
  resetFileInput();
  resetEffects();
  resetHashtag();
  resetDescription();
};


const closeUploadFormModal = () => {
  resetUploadForm();
  uploadFormModal.classList.add('hidden');
  body.classList.remove('modal-open');
};


const openSuccessAlert = () => {
  closeUploadFormModal();
  showAlert('upload-success');
};

const openErrorAlert = () => {
  closeUploadFormModal();
  showAlert('upload-error');
};

const onEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    closeUploadFormModal();
    window.removeEventListener('keydown', onEscKeydown);
  }
};


const onEscPropagation = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};


function openUploadFormModal() {
  uploadFormModal.classList.remove('hidden');
  body.classList.add('modal-open');
  window.addEventListener('keydown', onEscKeydown);
}


uploadInput.addEventListener('change', openUploadFormModal);
uploadFormCancel.addEventListener('click', closeUploadFormModal);


hashtagInput.addEventListener('input', validityHashtagsString);
hashtagInput.addEventListener('keydown', onEscPropagation);

descriptionInput.addEventListener('input', validityDescription);
descriptionInput.addEventListener('keydown', onEscPropagation);


export {openSuccessAlert, openErrorAlert};
