function isPositiveNumber(anyData) {
  return typeof anyData === 'number' && anyData >= 0;
}

function getRandomInRange(numberFirst, numberSecond) {
  if (isPositiveNumber(numberFirst) && isPositiveNumber(numberSecond)) {
    const from = Math.min(numberFirst, numberSecond);
    const to = Math.max(numberFirst, numberSecond);
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
  throw new Error('Передаваемые аргументы должны быть положительными числами');
}

function textLenghChecker(anyText, textLengh) {
  return textLengh > anyText.length;
}

try {
  getRandomInRange(20, 67);
} catch (error) {
  // eslint-disable-next-line no-console
  console.log(error);
}
textLenghChecker('Передаваемые аргументы должны быть положительными числами', 12);
