import './alerts-message.js';
import {isEscEvent} from '../utils/utils.js';

let alert = document.querySelector('.alert');
let alertWindow = alert.querySelector('div');
let alertBtn = alert.querySelector('button');


const isNoPopupClickEvent = (evt) => {
  const target = evt.target;
  const isPopup = target === alertWindow || alertWindow.contains(target);
  const isButton = target === alertBtn;
  return !isPopup && !isButton;
};


const onButtonClick = (evt) => {
  const target = evt.target;

  if (target === alertBtn) {
    evt.stopPropagation();
    closeAlert(alert);
  }
};


const onPopupEsc = (evt) => {
  if (isEscEvent(evt)) {
    closeAlert(alert);
  }
};

const onNonPopupClick = (evt) => {
  if (isNoPopupClickEvent(evt)) {
    closeAlert(alert);
  }
};


//function declaration для снятия обработчиков
function closeAlert (element) {
  element.classList.add('hidden');
  alert.removeEventListener('click', onButtonClick);
  document.removeEventListener('click', onNonPopupClick);
  document.removeEventListener('keydown', onPopupEsc);
}


const openAlert = (element) => {
  element.classList.remove('hidden');
  element.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onPopupEsc);
  document.addEventListener('click', onNonPopupClick);
};


const showAlert = (classElement) => {
  alert = document.querySelector(`.${classElement}`);
  alertWindow = alert.querySelector('div');
  alertBtn = alert.querySelector('button');
  openAlert(alert);
};


const openUpdateFailAlert = () => {
  showAlert('update-fail');
};


export {showAlert, openUpdateFailAlert};
