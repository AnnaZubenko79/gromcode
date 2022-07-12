const textInput = document.querySelector('.text-input');
const getChangeInput = () => {
  console.log(textInput.value);
};
textInput.addEventListener('change', getChangeInput);
