import {
  bigPictureCancel,
  pictures,
  COMMENT_SHOW_NUMBER,
  socialCommentsLoader
} from '../constants.js';

import {isEscEvent} from '../utils/utils.js';
import {makeBigPicture, hideBigPicture} from './big-picture.js';
import {unhideComments, updateCommentsCount} from './comments.js';


const renderSocialComments = () => {
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


const onClickMiniature = (evt) => {
  makeBigPicture(evt);
  window.addEventListener('keydown', onEscBigPicture);
};

socialCommentsLoader.addEventListener('click', renderSocialComments);
bigPictureCancel.addEventListener('click', closeBigPicture);
pictures.addEventListener('click', onClickMiniature);

