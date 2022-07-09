export function clearList() {
  const categoriesElem = document.querySelector('.categories');
  categoriesElem.innerHTML = '';
  return categoriesElem;
}
clearList();
