import {MAX_PHOTOS} from './constants.js';

import {fillBy} from './utils.js';

import {getRandomPicture} from './data.js';

import {getMiniatures} from './miniature.js';


const photos = fillBy(MAX_PHOTOS, getRandomPicture);

getMiniatures(photos);
