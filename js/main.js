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
const MAX_AVATARS = 6;
const BASE_IMAGE_PATH = 'photos';
const BASE_AVATAR_PATH = 'img';


//------------------------------


function isPositiveNumber(anyData) {
  return typeof anyData === 'number' && anyData >= 0;
}


const getRandomNumber = (min, max) => {
  if (isPositiveNumber(min) && isPositiveNumber(max)) {
    const from = Math.min(min, max);
    const to = Math.max(min, max);
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
  throw new Error('Передаваемые аргументы должны быть положительными числами');
};


const createIdx = (startIdx = 1) => {
  let idx = startIdx;

  return () => idx++;
};


const getPhotoUrl = (index) => `${BASE_IMAGE_PATH}/${index}.jpg`;
const getAvatarUrl = (index) => `${BASE_AVATAR_PATH}/avatar-${index}.svg`;


const fillBy = (count, cb) => {
  const result = [];

  for(let i = 0; i < count; i++) {
    result.push(cb());
  }
  return result;
};


const sortIndex = () => Math.floor(Math.random()*3 - 1);


const createGetRandomItem = (data) => {
  const mixed = [...data];
  for (let i = 0; i < data.length; i++) {
    mixed.sort(sortIndex);
  }
  let idx = 0;

  return () => mixed[idx++ % mixed.length];
};


const createAvatarId = createIdx();
const getRandomAvatarId = createGetRandomItem(fillBy(MAX_AVATARS, createAvatarId));
const getMessage = createGetRandomItem(USER_MESSAGES);
const getName = createGetRandomItem(USER_NAMES);
const getCommentsId = createIdx(1356);


const getRandomComment = () => ({
  id: getCommentsId(),
  avatar: getAvatarUrl(getRandomAvatarId()),
  message: getMessage(),
  name: getName(),
});


const getId = createIdx();
const getUrlId = createIdx();
const getDescription = createGetRandomItem(PHOTO_DESCRIPTION);


const createRandomPicture = () => () => ({
  id: getId(),
  url: getPhotoUrl(getUrlId()),
  description: getDescription(),
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: fillBy(getRandomNumber(MIN_COMMENTS, MAX_COMMENTS), getRandomComment),
});


const photos = fillBy(MAX_PHOTOS, createRandomPicture());


// eslint-disable-next-line no-console
console.log(photos);

