import {MAX_PHOTOS, BIG_PICTURE_CANCEL, PICTURES} from '../constants.js';
import {fillBy, isEscEvent, isEnterEvent} from '../utils.js';
import {getRandomPicture} from '../data.js';
import {appendMiniatures} from './miniature.js';
import {createBigPicture, showBigPicture, hideBigPicture} from './big-picture.js';


const PHOTOS = fillBy(MAX_PHOTOS, getRandomPicture);


const onEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    // eslint-disable-next-line no-use-before-define
    closeBigPicture();
  }
};


const onEnterKeydown = (evt) => {
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
  createBigPicture(PHOTOS[dataIdx]);
  showBigPicture();

  PICTURES.removeEventListener('keydown', onEnterKeydown);
  // eslint-disable-next-line no-use-before-define
  BIG_PICTURE_CANCEL.addEventListener('click', closeBigPicture);
  window.addEventListener('keydown', onEscKeydown);
}


function closeBigPicture() {
  hideBigPicture();

  window.removeEventListener('keydown', onEscKeydown);
  PICTURES.addEventListener('click', onClickMiniature);
  PICTURES.addEventListener('keydown', onEnterKeydown);
}


PICTURES.addEventListener('click', onClickMiniature);
PICTURES.addEventListener('keydown', onEnterKeydown);


const createGaleria = () => {
  appendMiniatures(PHOTOS);
};


export {createGaleria};
