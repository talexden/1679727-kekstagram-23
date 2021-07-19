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
import {setImageStyle, applyEffect} from './filters.js';
import {scaleControlEvent, getScaleValue, resetScaleValue} from './scale.js';

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


const sliderValueFleter = (value) => Number.isInteger(value) ?  value.toFixed(0) : value.toFixed(1);


const sliderUpdate = (_, handle, unencoded) => {
  const sliderValue = sliderValueFleter(unencoded[handle]);
  EFFECT_LEVEL_VALUE.value = sliderValue;
  setImageStyle(EFFECTS[checkedFilterName], sliderValue, getScaleValue());
  isToggleHideElement(UPLOAD_EFFECT_LEVEL, EFFECTS[checkedFilterName]);
};

EFFECT_LEVEL_SLIDER.noUiSlider.on('update', sliderUpdate);

IMG_UPLOAD_SCALE.addEventListener('click', scaleControlEvent);


export {resetEffects};
