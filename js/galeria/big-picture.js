import {AVATAR_WIDTH, AVATAR_HEIGHT, BODY} from '../constants.js';

const BIG_PICTURE = document.querySelector('.big-picture');
const IMAGE_CONTAINER = BIG_PICTURE.querySelector('.big-picture__img');
const IMAGE = IMAGE_CONTAINER.querySelector('img');
const IMAGE_CAPTION = BIG_PICTURE.querySelector('.social__caption');
const LIKES_COUNT = BIG_PICTURE.querySelector('.likes-count');
const COMMENTS_COUNT = BIG_PICTURE.querySelector('.comments-count');
const PICTURE_COMMENTS = BIG_PICTURE.querySelector('.social__comments');
const SOCIAL_COMMENTS_COUNT = BIG_PICTURE.querySelector('.social__comment-count');
const COMMENTS_LOADER = BIG_PICTURE.querySelector('.comments-loader');
const COMMENTS_TEMPLATE = document.querySelector('#comments').content;


const getComment = ({avatar, name, message}) => {
  const comment = COMMENTS_TEMPLATE.cloneNode(true);
  const avatarImage = comment.querySelector('.social__picture');
  const text = comment.querySelector('.social__text');

  avatarImage.src = avatar;
  avatarImage.alt = name;
  avatarImage.width = AVATAR_WIDTH;
  avatarImage.height = AVATAR_HEIGHT;
  text.textContent = message;
  return comment;
};


const getCommentsFragment = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((elment) => fragment.appendChild(getComment(elment)));
  return fragment;
};


const createBigPicture = ({url, description, likes, comments}) => {
  IMAGE.src = url;
  IMAGE.alt = description;
  IMAGE_CAPTION.textContent = description;
  LIKES_COUNT.textContent = likes;
  COMMENTS_COUNT.textContent = comments.length;
  PICTURE_COMMENTS.textContent = '';
  PICTURE_COMMENTS.appendChild(getCommentsFragment(comments));
};


const showBigPicture = () => {
  BIG_PICTURE.classList.remove('hidden');
  SOCIAL_COMMENTS_COUNT.classList.add('hidden');
  COMMENTS_LOADER.classList.add('hidden');
  BODY.classList.add('modal-open');
};


const hideBigPicture = () => {
  BIG_PICTURE.classList.add('hidden');
  SOCIAL_COMMENTS_COUNT.classList.remove('hidden');
  COMMENTS_LOADER.classList.remove('hidden');
  BODY.classList.remove('modal-open');
};


export {createBigPicture, showBigPicture, hideBigPicture};
