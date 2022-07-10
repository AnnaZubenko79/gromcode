export function createButton(buttonText) {
  const body = document.querySelector('body');
  const createBtn = document.createElement('button');
  body.append(createBtn);
  createBtn.textContent = `${buttonText}`;
}
createButton('I am btn');
