import {BIG_PICTURE, SOCIAL_COMMENTS, SOCIAL_COMMENTS_LOADER, COMMENTS_COUNT__ALL} from '../constants.js';

const COMMENTS_COUNT_UNHIDDEN = BIG_PICTURE.querySelector('.comments-count__unhidden');

const hideCommentsLoader = () => SOCIAL_COMMENTS_LOADER.classList.add('hidden');
const unhideCommentsLoader = () => SOCIAL_COMMENTS_LOADER.classList.remove('hidden');


const hideAllComments = () => {
  const comments = SOCIAL_COMMENTS.querySelectorAll('.social__comment');
  comments.forEach((comment) => comment.classList.add('hidden'));
};


const updateCommentsCount = () => {
  const unhiddenComments = SOCIAL_COMMENTS.querySelectorAll('.unhidden');
  COMMENTS_COUNT_UNHIDDEN.textContent = unhiddenComments.length;
  COMMENTS_COUNT__ALL.textContent === COMMENTS_COUNT_UNHIDDEN.textContent ? hideCommentsLoader() : unhideCommentsLoader();
};


const unhideComments = (number) => {
  const hiddenComments = SOCIAL_COMMENTS.querySelectorAll('.hidden');
  let cycleCount = hiddenComments.length;

  if (hiddenComments.length > number && number > 0) {
    cycleCount = number;
  }

  for (let i = 0; i < cycleCount; i++) {
    hiddenComments[i].classList.remove('hidden');
    hiddenComments[i].classList.add('unhidden');
  }
};


const createSocialComments = (number) => {
  hideAllComments();
  unhideComments(number);
  updateCommentsCount();
};

export {createSocialComments, unhideComments, updateCommentsCount};
