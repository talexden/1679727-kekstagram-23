import {appendMiniatures} from './galeria/miniature.js';
import {openSuccessAlert, openErrorAlert} from './upload-form/upload-form.js';
import {setImageFormSubmit} from './upload-form/upload-form-submit.js';
import {getData} from './server/api.js';
import './galeria/galeria.js';
import {showAlert, openUpdateFailAlert} from './server/alerts.js';

getData(appendMiniatures, openUpdateFailAlert);
setImageFormSubmit(openSuccessAlert, openErrorAlert);
