import {
  MAX_PHOTOS,
  BIG_PICTURE_CANCEL,
  PICTURES,
  HASHTAGS_MAX_NUMBER,
  BIG_PICTURE_SOCIAL
} from '../constants.js';
import {fillBy, isEscEvent, isEnterEvent} from '../utils.js';
import {getRandomPicture} from '../data.js';
import {appendMiniatures} from './miniature.js';
import {createBigPicture, showBigPicture, hideBigPicture, createSocialComments, unhideComments, updateCommentsCount} from './big-picture.js';

const SOCIAL_COMMENTS_LOADER = BIG_PICTURE_SOCIAL.querySelector('.social__comments-loader');


const photos = fillBy(MAX_PHOTOS, getRandomPicture);


const renderSocialComments = () => {
  unhideComments(HASHTAGS_MAX_NUMBER);
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
    const dataIdx = target.getAttribute('data-id') - 1;

    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    openBigPicture(dataIdx);
  }
};


function openBigPicture(dataIdx) {
  createBigPicture(photos[dataIdx]);
  showBigPicture();
  createSocialComments(HASHTAGS_MAX_NUMBER);

  PICTURES.removeEventListener('keydown', onEnterMiniature);
  // eslint-disable-next-line no-use-before-define
  BIG_PICTURE_CANCEL.addEventListener('click', closeBigPicture);
  window.addEventListener('keydown', onEscBigPicture);
  SOCIAL_COMMENTS_LOADER.addEventListener('click', renderSocialComments);
  SOCIAL_COMMENTS_LOADER.addEventListener('keydown', onEnterCommentsLoader);
}


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


const createGaleria = () => {
  appendMiniatures(photos);
};


export {createGaleria};
