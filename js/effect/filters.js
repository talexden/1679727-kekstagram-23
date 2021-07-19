import {IMAGE_UPLOAD_PREVIEW} from '../constants.js';


const setImageStyle = ({filter, postfix = ''}, filterValue, scaleValue = 1) => {
  const string = `filter: ${filter}(${filterValue}${postfix}); -webkit-filter: ${filter}(${filterValue}${postfix}); transform: scale(${scaleValue});`;
  IMAGE_UPLOAD_PREVIEW.style = string;
};


const applyEffect = (effectName) => {
  IMAGE_UPLOAD_PREVIEW.className = '';
  IMAGE_UPLOAD_PREVIEW.classList.add(`effects__preview--${effectName}`);
};


export {setImageStyle, applyEffect};
