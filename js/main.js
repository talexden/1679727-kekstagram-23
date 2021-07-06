import {MAX_PHOTOS} from './constants.js';
import {fillBy} from './utils.js';
import {getRandomPicture} from './data.js';
import {createMiniatures, pictures} from './miniature.js';
import {createBigPicture, showBigPicture} from './big-picture.js';


const photos = fillBy(MAX_PHOTOS, getRandomPicture);


createMiniatures(photos);


pictures.addEventListener('click', (evt) => {
  evt.preventDefault();
  const target = evt.target;

  if (target.classList.contains ('picture__img')) {
    const picture = target.parentElement;
    const dataIdx = picture.getAttribute('data-id') - 1;

    createBigPicture(photos[dataIdx]);
    showBigPicture();
  }
});
