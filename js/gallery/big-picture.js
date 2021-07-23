import {
  AVATAR_WIDTH,
  AVATAR_HEIGHT,
  body,
  bigPicture,
  socialComments,
  commentsCountAll, COMMENT_SHOW_NUMBER
} from '../constants.js';

import {getPicturesData} from '../server/api.js';
import {createSocialComments} from './comments.js';


const imageContainer = bigPicture.querySelector('.big-picture__img');
const bugImage = imageContainer.querySelector('img');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsTemplate = document.querySelector('#comments').content;


const getComment = ({avatar, name, message}) => {
  const commentNode = commentsTemplate.cloneNode(true);
  const avatarImage = commentNode.querySelector('.social__picture');
  const text = commentNode.querySelector('.social__text');

  avatarImage.src = avatar;
  avatarImage.alt = name;
  avatarImage.width = AVATAR_WIDTH;
  avatarImage.height = AVATAR_HEIGHT;
  text.textContent = message;
  return commentNode;
};


const getCommentsFragment = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((element) => fragment.appendChild(getComment(element)));
  return fragment;
};


const renderBigPicture = ({url, description, likes, comments}) => {
  bugImage.src = url;
  bugImage.alt = description;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  commentsCountAll.textContent = comments.length;
  socialComments.textContent = '';
  socialComments.appendChild(getCommentsFragment(comments));
};


const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};


const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};


const createBigPicture = (dataIdx) => {
  const picturesData = getPicturesData();

  renderBigPicture(picturesData[dataIdx]);
  createSocialComments(COMMENT_SHOW_NUMBER);
};


export {hideBigPicture, showBigPicture, createBigPicture};
