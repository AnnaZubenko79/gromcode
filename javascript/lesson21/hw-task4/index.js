export const setTitle = text => {
  const title = document.querySelector('.title');
  title.textContent = `${text}`;
};
setTitle('I am best developer');
