import {appendMiniatures} from './gallery/miniature.js';
import {openSuccessAlert, openErrorAlert} from './upload-form/upload-form.js';
import {setImageFormSubmit} from './upload-form/upload-form-submit.js';
import {getData} from './server/api.js';
import './gallery/gallery.js';
import './upload-form/upload-preview.js';
import {openUpdateFailAlert} from './server/alerts.js';


const getStartGallery = () => {
  getData(appendMiniatures, openUpdateFailAlert);
  setImageFormSubmit(openSuccessAlert, openErrorAlert);
};

window.addEventListener('load', getStartGallery);

