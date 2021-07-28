import {pictures} from '../constants.js';

const pictureTemplate = document.querySelector('#picture').content;

const clearMiniatures = () => {
  const miniatures = pictures.querySelectorAll('.picture');

  miniatures.forEach((element) => pictures.removeChild(element));
};


const renderPicture = ({description, id, likes, comments, url}) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureLink = picture.querySelector('.picture');
  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  pictureLink.setAttribute('data-id', id);
  pictureImg.src = url;
  pictureImg.alt = description;
  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;
  return picture;
};


const appendMiniatures = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach((item) => fragment.appendChild(renderPicture(item)));
  clearMiniatures();
  pictures.appendChild(fragment);
  return data;
};


export {appendMiniatures, clearMiniatures};
