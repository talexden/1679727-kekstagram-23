import {appendMiniatures} from './galeria/miniature.js';
import {ifSubmitSuccess, ifSubmitError} from './upload-form/upload-form.js';
import {setImageFormSubmit} from './upload-form/upload-form-submit.js';
import {getData} from './server/api.js';
import './galeria/galeria.js';

getData(appendMiniatures);
setImageFormSubmit(ifSubmitSuccess, ifSubmitError);
