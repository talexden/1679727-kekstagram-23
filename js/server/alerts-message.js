import {BODY} from '../constants.js';


const alerts = (templateName, alertType) => {
  const messageTemlate = document.querySelector(`#${templateName}`).content;
  const messageNode = messageTemlate.cloneNode(true);
  const message = messageNode.querySelector('section');
  const fragment = document.createDocumentFragment();

  message.classList.add('alert');
  message.classList.add('hidden');
  message.classList.add(`${alertType}-${templateName}`);
  fragment.appendChild(message);
  BODY.appendChild(fragment);
};


const createAlerts = () => {
  alerts('fail', 'update');
  alerts('success', 'upload');
  alerts('error', 'upload');
};


createAlerts();

