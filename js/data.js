import {
  getRandomNumber,
  createIdx,
  fillBy,
  createGetRandomItem
} from './utils.js';

import {
  BASE_IMAGE_PATH,
  BASE_AVATAR_PATH,
  MAX_AVATARS,
  USER_MESSAGES,
  USER_NAMES,
  START_COMMENT_ID,
  PHOTO_DESCRIPTION,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS
} from './constants.js';

const getPhotoUrl = (index) => `${BASE_IMAGE_PATH}/${index}.jpg`;
const getAvatarUrl = (index) => `${BASE_AVATAR_PATH}/avatar-${index}.svg`;


const getAvatarId = createIdx();
const getRandomAvatarId = createGetRandomItem(fillBy(MAX_AVATARS, getAvatarId));
const getMessage = createGetRandomItem(USER_MESSAGES);
const getName = createGetRandomItem(USER_NAMES);
const getCommentId = createIdx(START_COMMENT_ID);


const getRandomComment = () => ({
  id: getCommentId(),
  avatar: getAvatarUrl(getRandomAvatarId()),
  message: getMessage(),
  name: getName(),
});


const getId = createIdx();
const getUrlId = createIdx();
const getDescription = createGetRandomItem(PHOTO_DESCRIPTION);


const getRandomPicture = () => ({
  id: getId(),
  url: getPhotoUrl(getUrlId()),
  description: getDescription(),
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: fillBy(getRandomNumber(MIN_COMMENTS, MAX_COMMENTS), getRandomComment),
});


export {getRandomPicture};
