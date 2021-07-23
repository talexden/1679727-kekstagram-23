import {
  bigPictureCancel,
  pictures,
  COMMENT_SHOW_NUMBER,
  socialCommentsLoader
} from '../constants.js';

import {isEscEvent} from '../utils/utils.js';
import {hideBigPicture, showBigPicture, createBigPicture} from './big-picture.js';
import {unhideComments, updateCommentsCount} from './comments.js';


const onCommentsLoaderClick = () => {
  unhideComments(COMMENT_SHOW_NUMBER);
  updateCommentsCount();
};


const onEscBigPicture = (evt) => {
  if (isEscEvent(evt)) {
    hideBigPicture();
    window.removeEventListener('keydown', onEscBigPicture);
  }
};


const closeBigPicture = () => {
  hideBigPicture();
  window.removeEventListener('keydown', onEscBigPicture);
};


const onMiniatureClickEvent = (evt) => {
  const target = evt.target.parentElement;
  if (!target.classList.contains ('picture')) {
    return;
  }

  evt.preventDefault();
  const dataIdx = target.getAttribute('data-id');
  createBigPicture(dataIdx);
  showBigPicture();
  window.addEventListener('keydown', onEscBigPicture);
};


socialCommentsLoader.addEventListener('click', onCommentsLoaderClick);
bigPictureCancel.addEventListener('click', closeBigPicture);
pictures.addEventListener('click', onMiniatureClickEvent);

