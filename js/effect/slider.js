import './nouislider.js';
import {getFixedValue} from '../utils/utils.js';

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
        return getFixedValue(value);
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
