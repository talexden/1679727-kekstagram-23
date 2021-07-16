import {
  AVATAR_WIDTH,
  AVATAR_HEIGHT,
  BODY,
  BIG_PICTURE,
  SOCIAL_COMMENTS,
  COMMENTS_COUNT__ALL
} from '../constants.js';

const IMAGE_CONTAINER = BIG_PICTURE.querySelector('.big-picture__img');
const IMAGE = IMAGE_CONTAINER.querySelector('img');
const SOCIAL_CAPTION = BIG_PICTURE.querySelector('.social__caption');
const LIKES_COUNT = BIG_PICTURE.querySelector('.likes-count');
const COMMENTS_TEMPLATE = document.querySelector('#comments').content;


const getComment = ({avatar, name, message}) => {
  const commentNode = COMMENTS_TEMPLATE.cloneNode(true);
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


const createBigPicture = ({url, description, likes, comments}) => {
  IMAGE.src = url;
  IMAGE.alt = description;
  SOCIAL_CAPTION.textContent = description;
  LIKES_COUNT.textContent = likes;
  COMMENTS_COUNT__ALL.textContent = comments.length;
  SOCIAL_COMMENTS.textContent = '';
  SOCIAL_COMMENTS.appendChild(getCommentsFragment(comments));
};


const showBigPicture = () => {
  BIG_PICTURE.classList.remove('hidden');
  BODY.classList.add('modal-open');
};


const hideBigPicture = () => {
  BIG_PICTURE.classList.add('hidden');
  BODY.classList.remove('modal-open');
};


export {createBigPicture, showBigPicture, hideBigPicture};
