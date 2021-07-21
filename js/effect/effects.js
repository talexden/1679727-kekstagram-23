import {
  EFFECT_LEVEL_SLIDER,
  EFFECT_LEVEL_VALUE,
  EFFECTS,
  EFFECTS_LIST,
  IMG_UPLOAD_SCALE,
  UPLOAD_EFFECT_LEVEL
} from '../constants.js';

import {getFixedValue, isToggleHideElement} from '../utils/utils.js';
import {createSlider, updateSlider} from './slider.js';
import './nouislider.js';
import {applyEffect, setImageStyle} from './filters.js';
import {getScaleValue, resetScaleValue, scaleControlEvent} from './scale.js';

const noEffectRadio = EFFECTS_LIST.querySelector('#effect-none');

let checkedFilterName = 'none';


createSlider(EFFECT_LEVEL_SLIDER, EFFECTS[checkedFilterName]);

const resetEffects = () => {
  noEffectRadio.checked = true;
  checkedFilterName = 'none';
  applyEffect(checkedFilterName);
  updateSlider(EFFECT_LEVEL_SLIDER, EFFECTS[checkedFilterName]);
  resetScaleValue();
};

EFFECTS_LIST.addEventListener('change', () => {
  checkedFilterName = EFFECTS_LIST.querySelector('input[name="effect"]:checked').value;
  applyEffect(checkedFilterName);
  updateSlider(EFFECT_LEVEL_SLIDER, EFFECTS[checkedFilterName]);
});


const sliderUpdate = (_, handle, unencoded) => {
  const sliderValue = getFixedValue(unencoded[handle]);
  EFFECT_LEVEL_VALUE.value = sliderValue;
  setImageStyle(EFFECTS[checkedFilterName], sliderValue, getScaleValue());
  isToggleHideElement(UPLOAD_EFFECT_LEVEL, EFFECTS[checkedFilterName]);
};

EFFECT_LEVEL_SLIDER.noUiSlider.on('update', sliderUpdate);

IMG_UPLOAD_SCALE.addEventListener('click', scaleControlEvent);


export {resetEffects};
