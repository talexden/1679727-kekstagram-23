const BODY = document.querySelector('body');
const PICTURES = document.querySelector('.pictures');
const BIG_PICTURE = document.querySelector('.big-picture');
const BIG_PICTURE_CANCEL = BIG_PICTURE.querySelector('.big-picture__cancel');
const SOCIAL_COMMENTS = BIG_PICTURE.querySelector('.social__comments');
const SOCIAL_COMMENTS_LOADER = BIG_PICTURE.querySelector('.social__comments-loader');
const COMMENTS_COUNT__ALL = BIG_PICTURE.querySelector('.comments-count__all');
const UPLOAD_FORM = document.querySelector('.img-upload__form');
const IMG_UPLOAD_SCALE = UPLOAD_FORM.querySelector('.img-upload__scale');
const SCALE_CONTROL_VALUE = IMG_UPLOAD_SCALE.querySelector('.scale__control--value');
const IMAGE_UPLOAD_PREVIEW = UPLOAD_FORM.querySelector('.img-upload__preview img');
const EFFECTS_LIST = UPLOAD_FORM.querySelector('.effects__list');
const UPLOAD_EFFECT_LEVEL = UPLOAD_FORM.querySelector('.img-upload__effect-level');
const EFFECT_LEVEL_VALUE = UPLOAD_EFFECT_LEVEL.querySelector('.effect-level__value');
const EFFECT_LEVEL_SLIDER = UPLOAD_EFFECT_LEVEL.querySelector('.effect-level__slider');
const HASHTAG_INPUT = UPLOAD_FORM.querySelector('.text__hashtags');
const DESCRIPTION_INPUT = UPLOAD_FORM.querySelector('.text__description');
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const SCALE_DEFAULT = 100;
const HASHTAG_MIN_LENGHT = 2;
const HASHTAG_MAX_LENGHT = 20;
const HASHTAGS_MAX_NUMBER = 5;
const HASHTAG_SEPARATOR = /\s/;
const DESCRIPTION_MAX_LENGHT = 140;
const COMMENT_SHOW_NUMBER = 5;

const EFFECTS = {
  none: {
    minValue: 0,
    maxValue: 100,
    stepValue: 1,
    initialValue: 100,
    isShow: false,
    filter: 'none',
    postfix: '',
  },
  chrome: {
    minValue: 0,
    maxValue: 1,
    stepValue: 0.1,
    initialValue: 1,
    isShow: true,
    filter: 'grayscale',
    postfix: '',
  },
  sepia: {
    minValue: 0,
    maxValue: 1,
    stepValue: 0.1,
    initialValue: 1,
    isShow: true,
    filter: 'sepia',
    postfix: '',
  },
  marvin: {
    minValue: 0,
    maxValue: 100,
    stepValue: 1,
    initialValue: 100,
    isShow: true,
    filter: 'invert',
    postfix: '%',
  },
  phobos: {
    minValue: 0,
    maxValue: 3,
    stepValue: 0.1,
    initialValue: 3,
    isShow: true,
    filter: 'blur',
    postfix: 'px',
  },
  heat: {
    minValue: 0,
    maxValue: 3,
    stepValue: 0.1,
    initialValue: 3,
    isShow: true,
    filter: 'brightness',
    postfix: '',
  },
};


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
const MAX_COMMENTS = 12;
const START_COMMENT_ID = 1326;
const MAX_AVATARS = 6;
const BASE_IMAGE_PATH = 'photos';
const BASE_AVATAR_PATH = 'img';
const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;

export {
  BODY,
  PICTURES,
  BIG_PICTURE,
  BIG_PICTURE_CANCEL,
  SOCIAL_COMMENTS,
  SOCIAL_COMMENTS_LOADER,
  COMMENTS_COUNT__ALL,
  UPLOAD_FORM,
  IMG_UPLOAD_SCALE,
  SCALE_CONTROL_VALUE,
  IMAGE_UPLOAD_PREVIEW,
  UPLOAD_EFFECT_LEVEL,
  EFFECT_LEVEL_VALUE,
  EFFECT_LEVEL_SLIDER,
  EFFECTS_LIST,
  HASHTAG_INPUT,
  DESCRIPTION_INPUT,
  HASHTAG_MIN_LENGHT,
  HASHTAG_MAX_LENGHT,
  HASHTAG_SEPARATOR,
  HASHTAGS_MAX_NUMBER,
  DESCRIPTION_MAX_LENGHT,
  COMMENT_SHOW_NUMBER,
  MIN_SCALE,
  MAX_SCALE,
  SCALE_STEP,
  SCALE_DEFAULT,
  EFFECTS,
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
