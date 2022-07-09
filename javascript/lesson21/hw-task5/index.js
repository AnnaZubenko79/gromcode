export function setButton(buttonText) {
  const body = document.querySelector('body');
  body.innerHTML = `<button>${buttonText}</button>`;
  //   body.textContent = `<button>${buttonText}</button>`;
}
setButton('I am btn');
