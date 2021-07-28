import {FILTERS_TIMEOUT_DELAY, imageFilters, MAX_RANDOM_PICTURE} from '../constants.js';
import {appendMiniatures} from './miniature.js';
import {getPicturesData} from '../server/api.js';
import {createGetRandomItem, fillBy, getSorting} from '../utils/utils.js';
import {debounce} from '../utils/debounce.js';


const imageFilterForm = imageFilters.querySelector('.img-filters__form');
const imageFilterButtons = imageFilters.querySelectorAll('.img-filters__button');


const snowImageFilters = () => {
  imageFilters.classList.remove('img-filters--inactive');
};


const setFilterButtonsInactive = () => imageFilterButtons.forEach((item) => item.classList.remove('img-filters__button--active'));
const setFilterButtonActive = (element) => element.classList.add('img-filters__button--active');


const getRandomOrder = (pictures) => {
  const getRandomPicture = createGetRandomItem(pictures);
  const randomPictures = fillBy(pictures.length, getRandomPicture);
  return randomPictures.slice(0, MAX_RANDOM_PICTURE);
};


const getLikesSorting = (photoOne, photoTwo) => photoTwo.comments.length - photoOne.comments.length;

const getDiscussedOrder = (data) => {
  const clonedData = [...data];
  return getSorting(clonedData, getLikesSorting);
};


const appendPicturesEvent = (evt)  => {
  const elementId = evt.target.id;
  const pictureData = getPicturesData();
  let orderedPictures = pictureData;
  if(elementId === 'filter-discussed') {
    orderedPictures = getDiscussedOrder(pictureData);
  }
  if(elementId === 'filter-random') {
    orderedPictures = getRandomOrder(pictureData);
  }
  appendMiniatures(orderedPictures);
};


const onFilterButton = (evt) =>{
  const target = evt.target;
  setFilterButtonsInactive();
  setFilterButtonActive(target);
};

const debouncePicturesFilter = debounce((evt) => appendPicturesEvent(evt), FILTERS_TIMEOUT_DELAY);

imageFilterForm.addEventListener('click', debouncePicturesFilter);
imageFilterForm.addEventListener('click', onFilterButton);

export {snowImageFilters};
