import {resetScaleValue} from './effect/scale.js';
import {resetFileInput} from './upload-form/upload-form.js';


const resetUploadForm = () => {
  resetScaleValue();
  resetFileInput();
  console.log('reset');
};

export {resetUploadForm};
