const BODY = document.querySelector('body');
const PICTURES = document.querySelector('.pictures');
const BIG_PICTURE_CANCEL = document.querySelector('.big-picture__cancel');
const UPLOAD_FORM = document.querySelector('.img-upload__form');
const HASHTAG_INPUT = UPLOAD_FORM.querySelector('.text__hashtags');
const DESCRIPTION_INPUT = UPLOAD_FORM.querySelector('.text__description');
const HASHTAG_MIN_LENGHT = 2;
const HASHTAG_MAX_LENGHT = 20;
const HASHTAGS_MAX_NUMBER = 5;
const HASHTAG_SEPARATOR = /\s/;
const DESCRIPTION_MAX_LENGHT = 140;

const PHOTO_DESCRIPTION = [
  'Лес зеленый', 'Тень самурая', 'Айва Айвазовского', 'Звезды', 'Когда я быдл маленьким',
  '100 чертей', 'Пароходы, пароходы', 'Просто "Куст"', '7 и 1', 'Лампа',
  'Кто с нами?', 'Румба', 'С пятницы на субботу', 'Стог и я', 'Сколько стоит',
  'Пояснялка', 'Не стоит бегать', 'Цок-цок-цок', 'Зачем спать', 'Спокойно!',
  'О_о', 'Кончилось лето', 'Кзяущ бдя бдя', 'Я не помню вас', 'Вместе',
];

const USER_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USER_NAMES = [
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MAX_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 6;
const START_COMMENT_ID = 1326;
const MAX_AVATARS = 6;
const BASE_IMAGE_PATH = 'photos';
const BASE_AVATAR_PATH = 'img';
const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;

export {
  BODY,
  PICTURES,
  BIG_PICTURE_CANCEL,
  UPLOAD_FORM,
  HASHTAG_INPUT,
  DESCRIPTION_INPUT,
  HASHTAG_MIN_LENGHT,
  HASHTAG_MAX_LENGHT,
  HASHTAG_SEPARATOR,
  HASHTAGS_MAX_NUMBER,
  DESCRIPTION_MAX_LENGHT,
  PHOTO_DESCRIPTION,
  USER_MESSAGES,
  USER_NAMES,
  MAX_PHOTOS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  START_COMMENT_ID,
  MAX_AVATARS,
  BASE_IMAGE_PATH,
  BASE_AVATAR_PATH,
  AVATAR_WIDTH,
  AVATAR_HEIGHT
};
