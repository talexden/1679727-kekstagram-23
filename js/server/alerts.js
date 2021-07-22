import './alerts-message.js';
import {isEscEvent} from '../utils/utils.js';

let alert = document.querySelector('.alert');
let alertWindow = alert.querySelector('div');
let alertBtn = alert.querySelector('button');


const onNoPopupClickEvent = (evt) => {
  const target = evt.target;
  const isPopup = target === alertWindow || alertWindow.contains(target);
  const isButton = target === alertBtn;
  return !isPopup && !isButton;
};


const onButtonClickEvent = (evt) => {
  const target = evt.target;

  if (target === alertBtn) {
    evt.stopPropagation();
    alert.classList.add('hidden');
    alert.removeEventListener('click', onButtonClickEvent);
  }
};


const onEscapeAlert = (evt) => {
  if (isEscEvent(evt)) {
    alert.classList.add('hidden');
    document.removeEventListener('keydown', onEscapeAlert);
  }
};

const onClickOutside = (evt) => {
  if (onNoPopupClickEvent(evt)) {
    alert.classList.add('hidden');
    document.removeEventListener('click', onClickOutside);
  }
};


const openAlert = (element) => {
  element.classList.remove('hidden');
  element.addEventListener('click', onButtonClickEvent);
  document.addEventListener('keydown', onEscapeAlert);
  document.addEventListener('click', onClickOutside);
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
