import {MAX_PHOTOS} from './constants.js';

import {fillBy} from './utils.js';

import {getRandomPicture} from './data.js';


const photos = fillBy(MAX_PHOTOS, getRandomPicture);

// eslint-disable-next-line no-console
console.log(photos);
