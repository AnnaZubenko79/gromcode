const baseUrl = 'https://62e3f5a5c6b56b45117f936b.mockapi.io/api/v1/userForm';

const submitBtnElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

const onValid = () => {
  if (!formElem.reportValidity()) {
    return submitBtnElem.setAttribute('disabled', true);
  }
  return submitBtnElem.removeAttribute('disabled');
};

const onSendData = event => {
  event.preventDefault();
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(Object.fromEntries(new FormData(formElem))),
  })
    .then(response => response.json())
    .then(userData => {
      alert(JSON.stringify(userData));
      formElem.reset();
    });
};

formElem.addEventListener('submit', onSendData);
formElem.addEventListener('input', onValid);
