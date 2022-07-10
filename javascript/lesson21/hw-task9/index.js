export function finishForm() {
  const loginForm = document.querySelector('.login-form');
  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('name', 'login');
  loginForm.prepend(inputText);
  const inputPassword = document.querySelector('input[name="password"]');
  inputPassword.setAttribute('type', 'password');
}
finishForm();
