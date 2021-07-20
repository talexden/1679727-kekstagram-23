import {
  BODY,
  DESCRIPTION_INPUT,
  HASHTAG_INPUT,
  UPLOAD_FORM
} from '../constants.js';

import {isEscEvent} from '../utils.js';
import {validityHashtagsString, validityDescription, resetHashtag, resetDescription} from './upload-form-validation.js';
import {getData} from '../server/api.js';
import {appendMiniatures} from '../galeria/miniature.js';
import {showAlert} from '../server/alerts.js';
import {resetEffects} from '../effect/effects.js';

const UPLOAD_INPUT = UPLOAD_FORM.querySelector('.img-upload__input');
const UPLOAD_FORM_MODAL = UPLOAD_FORM.querySelector('.img-upload__overlay');
const UPLOAD_FORM_CANCEL = UPLOAD_FORM.querySelector('.img-upload__cancel');


const resetFileInput = () => {
  UPLOAD_INPUT.value = '';
};

const resetUploadForm = () => {
  resetFileInput();
  resetEffects();
  resetHashtag();
  resetDescription();
};

const openSuccessAlert = () => {
  // eslint-disable-next-line no-use-before-define
  closeUploadFormModal();
  showAlert('upload-success');
};

const openErrorAlert = () => {
  // eslint-disable-next-line no-use-before-define
  closeUploadFormModal();
  showAlert('upload-error');
};

const onEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    // eslint-disable-next-line no-use-before-define
    closeUploadFormModal();
  }
};


const onEscPropagation = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};


// здесь function потому что эта функция используется выше
function openUploadFormModal() {
  UPLOAD_FORM_MODAL.classList.remove('hidden');
  BODY.classList.add('modal-open');
  window.addEventListener('keydown', onEscKeydown);
}


// здесь function потому что эта функция используется выше
function closeUploadFormModal() {
  resetUploadForm();
  UPLOAD_FORM_MODAL.classList.add('hidden');
  BODY.classList.remove('modal-open');
  window.removeEventListener('keydown', onEscKeydown);
}


UPLOAD_INPUT.addEventListener('change', openUploadFormModal);
UPLOAD_FORM_CANCEL.addEventListener('click', closeUploadFormModal);


HASHTAG_INPUT.addEventListener('input', validityHashtagsString);
HASHTAG_INPUT.addEventListener('keydown', onEscPropagation);

DESCRIPTION_INPUT.addEventListener('input', validityDescription);
DESCRIPTION_INPUT.addEventListener('keydown', onEscPropagation);


export {openSuccessAlert, openErrorAlert};
