import {
  UPLOAD_EFFECT_LEVEL,
  EFFECT_LEVEL_SLIDER,
  EFFECT_LEVEL_VALUE,
  EFFECTS_LIST,
  EFFECTS, IMG_UPLOAD_SCALE
} from '../constants.js';

import {isToggleHideElement} from '../utils.js';
import {createSlider, updateSlider} from './slider.js';
import './nouislider.js';
import {renderStyle, applyEffect} from './filters.js';
import {scaleControlEvent, getScaleValue} from './scale.js';

createSlider(EFFECT_LEVEL_SLIDER, EFFECTS.none);

let checkedFilterName = 'none';

EFFECTS_LIST.addEventListener('change', () => {
  checkedFilterName = EFFECTS_LIST.querySelector('input[name="effect"]:checked').value;
  applyEffect(checkedFilterName);
  updateSlider(EFFECT_LEVEL_SLIDER, EFFECTS[checkedFilterName]);
});


const sliderValueFleter = (number) => {
  if (Number.isInteger(number)) {
    return number.toFixed(0);
  }
  return number.toFixed(1);
};


EFFECT_LEVEL_SLIDER.noUiSlider.on('update', (_, handle, unencoded) => {
  const sliderValue = sliderValueFleter(unencoded[handle]);
  EFFECT_LEVEL_VALUE.value = sliderValue;
  renderStyle(EFFECTS[checkedFilterName], sliderValue, getScaleValue());
  isToggleHideElement(UPLOAD_EFFECT_LEVEL, EFFECTS[checkedFilterName]);

  // eslint-disable-next-line no-console
  console.log(sliderValue);
});


IMG_UPLOAD_SCALE.addEventListener('click', scaleControlEvent);
