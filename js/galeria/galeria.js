import {
  BIG_PICTURE_CANCEL,
  PICTURES,
  COMMENT_SHOW_NUMBER,
  SOCIAL_COMMENTS_LOADER
} from '../constants.js';

import {isEscEvent, isEnterEvent} from '../utils.js';
import {createBigPicture, showBigPicture, hideBigPicture} from './big-picture.js';
import {createSocialComments, unhideComments, updateCommentsCount} from './comments.js';
import {pictures} from './miniature.js';


const renderSocialComments = () => {
  unhideComments(COMMENT_SHOW_NUMBER);
  updateCommentsCount();
};


const onEnterCommentsLoader = (evt) => {
  if (isEnterEvent(evt)) {
    renderSocialComments();
  }
};

const onEscBigPicture = (evt) => {
  if (isEscEvent(evt)) {
    // eslint-disable-next-line no-use-before-define
    closeBigPicture();
  }
};


const onEnterMiniature = (evt) => {
  if (isEnterEvent(evt)) {
    // eslint-disable-next-line no-use-before-define
    onClickMiniature(evt);
  }
};


const onClickMiniature = (evt) => {
  let target = evt.target;

  if (target.classList.contains ('picture__img')) {
    target = target.parentElement;
  }

  if (target.classList.contains ('picture')) {
    const dataIdx = target.getAttribute('data-id');

    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    openBigPicture(dataIdx);
  }
};


// здесь function потому что эта функция используется выше
function openBigPicture(dataIdx) {
  createBigPicture(pictures[dataIdx]);
  showBigPicture();
  createSocialComments(COMMENT_SHOW_NUMBER);

  PICTURES.removeEventListener('keydown', onEnterMiniature);
  // eslint-disable-next-line no-use-before-define
  BIG_PICTURE_CANCEL.addEventListener('click', closeBigPicture);
  window.addEventListener('keydown', onEscBigPicture);
  SOCIAL_COMMENTS_LOADER.addEventListener('click', renderSocialComments);
  SOCIAL_COMMENTS_LOADER.addEventListener('keydown', onEnterCommentsLoader);
}


// здесь function потому что эта функция используется выше
function closeBigPicture() {
  hideBigPicture();

  window.removeEventListener('keydown', onEscBigPicture);
  SOCIAL_COMMENTS_LOADER.removeEventListener('click', renderSocialComments);
  SOCIAL_COMMENTS_LOADER.removeEventListener('keydown', onEnterCommentsLoader);
  PICTURES.addEventListener('click', onClickMiniature);
  PICTURES.addEventListener('keydown', onEnterMiniature);
}


PICTURES.addEventListener('click', onClickMiniature);
PICTURES.addEventListener('keydown', onEnterMiniature);

