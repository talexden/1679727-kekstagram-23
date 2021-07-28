const fillBy = (count, cb) => {
  const results = [];

  for(let i = 0; i < count; i++) {
    results.push(cb());
  }
  return results;
};


const sortIndex = () => Math.floor(Math.random()*3 - 1);


const createGetRandomItem = (data) => {
  const mixedData = [...data];

  for (let i = 0; i < data.length; i++) {
    mixedData.sort(sortIndex);
  }
  let idx = 0;

  return () => mixedData[idx++ % mixedData.length];
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


const getFixedValue = (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);


const getSorting= (data, cb) => {
  const copyData = [...data];
  copyData.sort(cb);
  return copyData;
};


export {
  createGetRandomItem,
  fillBy,
  isEnterEvent,
  isEscEvent,
  isArrayElementsMatch,
  isToggleHideElement,
  getFixedValue,
  getSorting
};
