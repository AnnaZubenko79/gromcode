// // --algo
// // 1)receive in variables:
// // 1.1)rect_div, rect_p, rect_span, events-list
// // 1.2)btn: clear, attach and remove
// // write a function that clear events-list
// // pass function at clearBtn
// // write a function for capturing and for bubbling
// // write a function that attach events
// // pass function at attachBtn
// // write a function that remove events
// // pass a function at removeBtn

const eventsList = document.querySelector('.events-list');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  eventsList.innerHTML += `<span style="color: ${color};  margin-left: 8px">${text}</span>`;
};

const clearEventList = () => {
  eventsList.innerHTML = '';
};

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreyP = logTarget.bind(null, 'p', 'grey');
const logGreenSpan = logTarget.bind(null, 'span', 'green');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

const attachList = () => {
  divElem.addEventListener('click', logGreenDiv);
  divElem.addEventListener('click', logGreyDiv, { capture: true });
  pElem.addEventListener('click', logGreenP);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreenSpan);
  spanElem.addEventListener('click', logGreySpan, true);
};

const removeList = () => {
  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);

  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreySpan, true);
};
clearBtn.addEventListener('click', clearEventList);
removeBtn.addEventListener('click', removeList);
attachBtn.addEventListener('click', attachList);
// attachList();
document.addEventListener('DOMContentLoaded', () => {
  attachList();
});
