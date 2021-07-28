import {imageUploadPreview} from '../constants.js';


const setImageStyle = ({filter, postfix = ''}, filterValue, scaleValue = 1) => {
  const string = `filter: ${filter}(${filterValue}${postfix}); -webkit-filter: ${filter}(${filterValue}${postfix}); transform: scale(${scaleValue});`;
  imageUploadPreview.style = string;
};


const applyEffect = (effectName) => {
  imageUploadPreview.className = '';
  imageUploadPreview.classList.add(`effects__preview--${effectName}`);
};


export {setImageStyle, applyEffect};
