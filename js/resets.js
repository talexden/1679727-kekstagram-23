import {resetScaleValue} from './effect/scale.js';
import {resetFileInput} from './upload-form/upload-form.js';


const resetUploadForm = () => {
  resetScaleValue();
  resetFileInput();
};

export {resetUploadForm};
