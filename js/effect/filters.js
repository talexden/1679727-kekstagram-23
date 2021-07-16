import {IMAGE_UPLOAD_PREVIEW} from '../constants.js';


const effectStyle = ({filter, postfix = ''}, filterValue ) => {
  const string = `filter: ${filter}(${filterValue}${postfix}); -webkit-filter: ${filter}(${filterValue}${postfix})`;
  IMAGE_UPLOAD_PREVIEW.style = string;
};


const applyEffect = (effectName) => {
  IMAGE_UPLOAD_PREVIEW.className = '';
  IMAGE_UPLOAD_PREVIEW.classList.add(`effects__preview--${effectName}`);
};


export {effectStyle, applyEffect};
