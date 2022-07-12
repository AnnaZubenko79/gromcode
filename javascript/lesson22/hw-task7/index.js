const inputElem = document.querySelector('.text-input');
const getInputValue = event => {
  console.log(event.target.value);
};
inputElem.addEventListener('change', getInputValue);
