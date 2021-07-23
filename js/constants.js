const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsLoader = bigPicture.querySelector('.social__comments-loader');
const commentsCountAll = bigPicture.querySelector('.comments-count__all');
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const imgUploadScale = uploadForm.querySelector('.img-upload__scale');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const imageUploadPreview = uploadForm.querySelector('.img-upload__preview img');
const effectsList = uploadForm.querySelector('.effects__list');
const uploadEffectLevel = uploadForm.querySelector('.img-upload__effect-level');
const effectLevelValue = uploadEffectLevel.querySelector('.effect-level__value');
const effectLevelSlider = uploadEffectLevel.querySelector('.effect-level__slider');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');
const imageFilters = document.querySelector('.img-filters');

const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;
const MIN_SCALE = 0.25;
const MAX_SCALE = 1;
const SCALE_STEP = 0.25;
const SCALE_DEFAULT = 1;
const HASHTAG_MIN_LENGHT = 2;
const HASHTAG_MAX_LENGHT = 20;
const HASHTAGS_MAX_NUMBER = 5;
const HASHTAG_SEPARATOR = /\s/;
const DESCRIPTION_MAX_LENGHT = 140;
const COMMENT_SHOW_NUMBER = 5;
const MAX_RANDOM_PICTURE = 10;
const FILTERS_TIMEOUT_DELAY = 500;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const INCOMING_SERVER_ADDRESS = 'https://23.javascript.pages.academy/kekstagram/data';
const OUTGOING_SERVER_ADDRESS = 'https://23.javascript.pages.academy/kekstagram';

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
    minValue: 1,
    maxValue: 3,
    stepValue: 0.1,
    initialValue: 3,
    isShow: true,
    filter: 'brightness',
    postfix: '',
  },
};

export {
  body,
  pictures,
  bigPicture,
  bigPictureCancel,
  socialComments,
  socialCommentsLoader,
  commentsCountAll,
  uploadForm,
  uploadInput,
  imgUploadScale,
  scaleControlValue,
  imageUploadPreview,
  uploadEffectLevel,
  effectLevelValue,
  effectLevelSlider,
  effectsList,
  hashtagInput,
  descriptionInput,
  HASHTAG_MIN_LENGHT,
  HASHTAG_MAX_LENGHT,
  HASHTAG_SEPARATOR,
  HASHTAGS_MAX_NUMBER,
  DESCRIPTION_MAX_LENGHT,
  COMMENT_SHOW_NUMBER,
  imageFilters,
  MIN_SCALE,
  MAX_SCALE,
  SCALE_STEP,
  SCALE_DEFAULT,
  MAX_RANDOM_PICTURE,
  FILTERS_TIMEOUT_DELAY,
  FILE_TYPES,
  INCOMING_SERVER_ADDRESS,
  OUTGOING_SERVER_ADDRESS,
  EFFECTS,
  AVATAR_WIDTH,
  AVATAR_HEIGHT
};
