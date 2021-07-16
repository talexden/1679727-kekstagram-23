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
import {effectStyle, applyEffect} from './filters.js';
import {scaleControlEvent} from './scale.js';

createSlider(EFFECT_LEVEL_SLIDER, EFFECTS.none);

let checkedFilterName = 'none';

EFFECTS_LIST.addEventListener('change', () => {
  checkedFilterName = EFFECTS_LIST.querySelector('input[name="effect"]:checked').value;
  applyEffect(checkedFilterName);
  updateSlider(EFFECT_LEVEL_SLIDER, EFFECTS[checkedFilterName]);
});


EFFECT_LEVEL_SLIDER.noUiSlider.on('update', (_, handle, unencoded) => {
  const value = unencoded[handle];
  EFFECT_LEVEL_VALUE.value = value;
  effectStyle(EFFECTS[checkedFilterName], value);
  isToggleHideElement(UPLOAD_EFFECT_LEVEL, EFFECTS[checkedFilterName]);

  // eslint-disable-next-line no-console
  console.log(value);
});


IMG_UPLOAD_SCALE.addEventListener('click', scaleControlEvent);
