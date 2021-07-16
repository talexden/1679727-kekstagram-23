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


const isArrayElementsMatch = (data) => {
  let matcher = [0, 0, false];
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] === data[j]) {
        matcher = [i, j, true];
        return matcher;
      }
    }
  }
  return matcher;
};


const isToggleHideElement = (element, {isShow}) => isShow ?
  element.classList.remove('visually-hidden') :
  element.classList.add('visually-hidden');


const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';


const isEnterEvent = (evt) => evt.key === 'Enter';


export {createIdx, createGetRandomItem, fillBy, getRandomNumber, isEnterEvent, isEscEvent, isArrayElementsMatch, isToggleHideElement};
