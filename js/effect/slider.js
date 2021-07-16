import './nouislider.js';

const createSlider = (element, {minValue, maxValue, stepValue, initialValue}) => {
  noUiSlider.create(element, {
    range: {
      min: minValue,
      max: maxValue,
    },
    step: stepValue,
    start: initialValue,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

const updateSlider = (element, {minValue, maxValue, stepValue, initialValue}) => {
  element.noUiSlider.updateOptions( {
    range: {
      min: minValue,
      max: maxValue,
    },
    step: stepValue,
    start: initialValue,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};


export {createSlider, updateSlider};
