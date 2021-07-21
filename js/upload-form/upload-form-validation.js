import {
  HASHTAG_INPUT,
  DESCRIPTION_INPUT,
  HASHTAG_MIN_LENGHT,
  HASHTAG_MAX_LENGHT,
  HASHTAGS_MAX_NUMBER,
  DESCRIPTION_MAX_LENGHT,
  HASHTAG_SEPARATOR
} from '../constants.js';

import {isArrayElementsMatch} from '../utils/utils.js';

const RE_HASHTAG = new RegExp(`^#[A-Za-zА-Яа-я0-9]{${HASHTAG_MIN_LENGHT - 1},${HASHTAG_MAX_LENGHT - 1}}$`);


const getHashtagValidity = (hashtag, index) => {
  let validityMessage = `Хэштег может содержать только буквы и цифры. Можно добавить до ${HASHTAGS_MAX_NUMBER} хэштегов через пробел.`;

  if (RE_HASHTAG.test(hashtag)) {
    validityMessage = '';
  } else {
    if (hashtag[0] !== '#') {
      validityMessage = `Допущена ошибка в хештеге ${index}. Хэштег должен начинаться с символа "#".`;
    } else {
      if (hashtag.length < HASHTAG_MIN_LENGHT) {
        validityMessage = `Допущена ошибка в хештеге ${index}. Хэштег должен содержать не меньше ${HASHTAG_MIN_LENGHT - 1}-го символа после символа "#".`;
      } else {
        if (hashtag.length > HASHTAG_MAX_LENGHT) {
          validityMessage = `Допущена ошибка в хештеге ${index}. Хэштег не может быть более ${HASHTAG_MAX_LENGHT} символов.`;
        }
      }
    }
  }
  return validityMessage;
};


const validityHashtagsString = () => {
  const hashtags = HASHTAG_INPUT.value.split(HASHTAG_SEPARATOR);
  let validityMessage = 'Проверка не работает.';

  if (hashtags.length > HASHTAGS_MAX_NUMBER) {
    validityMessage = `Допустимое количестве хэштегов - ${HASHTAGS_MAX_NUMBER}.`;
  } else {
    for (let i = 0; i < hashtags.length; i++) {
      validityMessage = getHashtagValidity(hashtags[i], i + 1);
    }
    const matcher =  isArrayElementsMatch(hashtags);
    if(matcher[2]) {
      validityMessage = `Хештеги ${matcher[0]+1} и ${matcher[1]+1} должны иметь разные имена.`;
    }
  }
  HASHTAG_INPUT.setCustomValidity(validityMessage);
  HASHTAG_INPUT.reportValidity();
};


const validityDescription = () => {
  let validityMessage = '';

  DESCRIPTION_INPUT.maxLength = DESCRIPTION_MAX_LENGHT;
  if (DESCRIPTION_INPUT.value.length === DESCRIPTION_MAX_LENGHT) {
    validityMessage = `Использовано максимально допустимое количество символов(${DESCRIPTION_MAX_LENGHT})>`;
  }
  DESCRIPTION_INPUT.setCustomValidity(validityMessage);
  DESCRIPTION_INPUT.reportValidity();
};


const resetHashtag = () => {
  HASHTAG_INPUT.value = '';
};

const resetDescription = () => {
  DESCRIPTION_INPUT.value = '';
};


export {validityHashtagsString, validityDescription, resetHashtag, resetDescription};
