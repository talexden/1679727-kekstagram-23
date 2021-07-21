import {IMAGE_FILTERS, MAX_RANDOM_PICTURE, FILTERS_TIMEOUT_DELAY} from '../constants.js';
import {appendMiniatures} from './miniature.js';
import {getPicturesData} from '../server/api.js';
import {getSorting, createGetRandomItem, fillBy} from '../utils/utils.js';
import {debounce} from '../utils/debounce.js';


const IMAGE_FILTER_FORM = IMAGE_FILTERS.querySelector('.img-filters__form');
const IMAGE_FILTER_BUTTONS = IMAGE_FILTERS.querySelectorAll('.img-filters__button');


const snowImageFilters = () => {
  IMAGE_FILTERS.classList.remove('img-filters--inactive');
};


const setFilterButtonsInactive = () => IMAGE_FILTER_BUTTONS.forEach((item) => item.classList.remove('img-filters__button--active'));
const setFilterButtonActive = (element) => element.classList.add('img-filters__button--active');


const getRandomOrder = (pictures) => {
  const getRandomPicture = createGetRandomItem(pictures);
  const randomPictures = fillBy(pictures.length, getRandomPicture);
  const rangedPictures = randomPictures.slice(0, MAX_RANDOM_PICTURE);
  return rangedPictures;
};


const getLikesSorting = (photoOne, photoTwo) => photoTwo.comments.length - photoOne.comments.length;


const getDiscussedOrder = (data) => {
  const clonedData = [...data];
  const orderedData = getSorting(clonedData, getLikesSorting);
  return orderedData;
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

IMAGE_FILTER_FORM.addEventListener('click', debouncePicturesFilter);
IMAGE_FILTER_FORM.addEventListener('click', onFilterButton);

export {snowImageFilters};
