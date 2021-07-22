import {bigPicture, socialComments, socialCommentsLoader, commentsCountAll} from '../constants.js';

const commentsCountUnhidden = bigPicture.querySelector('.comments-count__unhidden');

const hideCommentsLoader = () => socialCommentsLoader.classList.add('hidden');
const unhideCommentsLoader = () => socialCommentsLoader.classList.remove('hidden');


const hideAllComments = () => {
  const comments = socialComments.querySelectorAll('.social__comment');
  comments.forEach((comment) => comment.classList.add('hidden'));
};


const updateCommentsCount = () => {
  const unhiddenComments = socialComments.querySelectorAll('.unhidden');

  commentsCountUnhidden.textContent = unhiddenComments.length;
  if (commentsCountAll.textContent === commentsCountUnhidden.textContent) {
    hideCommentsLoader();
  } else {
    unhideCommentsLoader();
  }
};


const unhideComments = (number) => {
  const hiddenComments = socialComments.querySelectorAll('.hidden');
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
