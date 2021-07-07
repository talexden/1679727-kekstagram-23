import {AVATAR_WIDTH, AVATAR_HEIGHT} from './constants.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const imageContaner = bigPicture.querySelector('.big-picture__img');
const image = imageContaner.querySelector('img');
const imageCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const pictureComments = bigPicture.querySelector('.social__comments');


const getComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  const avatarImage = document.createElement('img');
  const text = document.createElement('p');

  comment.classList.add('social__comment');
  avatarImage.classList.add('social__picture');
  avatarImage.src = avatar;
  avatarImage.alt = name;
  avatarImage.width = AVATAR_WIDTH;
  avatarImage.height = AVATAR_HEIGHT;
  comment.appendChild(avatarImage);
  text.classList.add('social__text');
  text.textContent = message;
  comment.appendChild(text);
  return comment;
};


const getCommentsFragment = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((elment) => fragment.appendChild(getComment(elment)));
  return fragment;
};


const createBigPicture = ({url, description, likes, comments}) => {
  image.src = url;
  image.alt = description;
  imageCaption.textContent = description;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  pictureComments.textContent = '';
  pictureComments.appendChild(getCommentsFragment(comments));
};

const showBigPicture = () => {
  const socialCommentCount = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');

  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

bigPictureCancel.addEventListener('click', () => hideBigPicture());

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    hideBigPicture();
  }
});

export {createBigPicture, showBigPicture, hideBigPicture};
