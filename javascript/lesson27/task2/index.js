const counterElem = document.querySelector('.counter');
const counterValueElement = document.querySelector('.counter__value');
const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__btn');
  if (!isButton) {
    return;
  }
  const action = e.target.dataset.action;
  const oldValue = Number(counterValueElement.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
  localStorage.setItem('counterValue', newValue);
  counterValueElement.textContent = newValue;
};
counterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
  console.log(e);
  counterValueElement.textContent = e.newValue;
};
window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueElement.textContent = localStorage.getItem('counterValue') || 0;
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);
