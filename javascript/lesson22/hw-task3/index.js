const inputCheckbox = document.querySelector('.task-status');
const getChecked = () => {
  if (inputCheckbox.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(inputCheckbox.value);
};
inputCheckbox.addEventListener('change', getChecked);
