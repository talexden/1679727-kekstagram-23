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
        return Number.isInteger(value) ?  value.toFixed(0) : value.toFixed(1);
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
  });
};


export {createSlider, updateSlider};
