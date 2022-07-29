const baseUrl = 'https://62e3f5a5c6b56b45117f936b.mockapi.io/api/v1/userForm';

const submitBtnElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const formElem = document.querySelector('.login-form');
const inputs = [...document.querySelectorAll('.form-input')];

const onValid = () => {
  formElem.reportValidity() ? (submitBtnElem.disabled = false) : (submitBtnElem.disabled = true);
  errorElem.textContent = '';
};

const onsendData = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(userData => {
      inputs.map(elem => {
        elem.value = '';
        return elem.value;
      });
      submitBtnElem.disabled = true;
      alert(JSON.stringify(userData));
    })
    .catch(() => (errorElem.textContent = 'Failed to create user'));
};

formElem.addEventListener('submit', onsendData);
formElem.addEventListener('input', onValid);
