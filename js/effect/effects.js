import {
  effectLevelSlider,
  effectLevelValue,
  EFFECTS,
  effectsList,
  imgUploadScale,
  uploadEffectLevel
} from '../constants.js';

import {getFixedValue, isToggleHideElement} from '../utils/utils.js';
import {createSlider, updateSlider} from './slider.js';
import './nouislider.js';
import {applyEffect, setImageStyle} from './filters.js';
import {getScaleValue, resetScaleValue, onScaleClickEvent} from './scale.js';

const noEffectRadio = effectsList.querySelector('#effect-none');

let checkedFilterName = 'none';


createSlider(effectLevelSlider, EFFECTS[checkedFilterName]);

const resetEffects = () => {
  noEffectRadio.checked = true;
  checkedFilterName = 'none';
  applyEffect(checkedFilterName);
  updateSlider(effectLevelSlider, EFFECTS[checkedFilterName]);
  resetScaleValue();
};

effectsList.addEventListener('change', () => {
  checkedFilterName = effectsList.querySelector('input[name="effect"]:checked').value;
  applyEffect(checkedFilterName);
  updateSlider(effectLevelSlider, EFFECTS[checkedFilterName]);
});


const onSliderChange = (_, handle, unencoded) => {
  const sliderValue = getFixedValue(unencoded[handle]);
  effectLevelValue.value = sliderValue;
  setImageStyle(EFFECTS[checkedFilterName], sliderValue, getScaleValue());
  isToggleHideElement(uploadEffectLevel, EFFECTS[checkedFilterName]);
};

effectLevelSlider.noUiSlider.on('update', onSliderChange);

imgUploadScale.addEventListener('click', onScaleClickEvent);


export {resetEffects};
