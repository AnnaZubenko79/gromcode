const baseUrl = 'https://62e3f5a5c6b56b45117f936b.mockapi.io/api/v1/userForm';

const submitBtnElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

const onValid = () => {
  if (!formElem.reportValidity()) {
    return submitBtnElem.setAttribute('disabled', true);
  }
  return submitBtnElem.setAttribute('disabled');
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
      alert(JSON.stringify(userData));
      formElem.reset();
    });
};

formElem.addEventListener('submit', onsendData);
formElem.addEventListener('input', onValid);
