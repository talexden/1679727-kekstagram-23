import {
  scaleControlValue,
  imageUploadPreview,
  MIN_SCALE,
  MAX_SCALE,
  SCALE_STEP,
  SCALE_DEFAULT
} from '../constants.js';


const setScaleStyle = (value) => {
  imageUploadPreview.style = `transform: scale(${value})`;
};

let scaleValue = SCALE_DEFAULT;

const setScaleClick = (evt) => {
  const target = evt.target;

  if (target.classList.contains ('scale__control--smaller') && scaleValue > MIN_SCALE) {
    scaleValue -= SCALE_STEP;
  }
  if (target.classList.contains ('scale__control--bigger') && scaleValue < MAX_SCALE) {
    scaleValue += SCALE_STEP;
  }
  if (scaleValue < MIN_SCALE) {scaleValue = MIN_SCALE;}
  if (scaleValue > MAX_SCALE) {scaleValue = MAX_SCALE;}
  scaleControlValue.value = `${scaleValue * 100}%`;
  setScaleStyle(scaleValue);
};


const getScaleValue = () => scaleValue;

const resetScaleValue = () => {
  scaleValue = SCALE_DEFAULT;
  setScaleStyle(SCALE_DEFAULT);
  scaleControlValue.value = `${scaleValue * 100}%`;
};


export {setScaleClick, resetScaleValue, getScaleValue};
