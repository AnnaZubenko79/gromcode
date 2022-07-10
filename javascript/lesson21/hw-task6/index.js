// export function clearList() {
//   const categoriesElem = document.querySelector('.categories');
//   categoriesElem.innerHTML = '';

//   return categoriesElem;
// }
// clearList();
export function clearList() {
  return (document.querySelector('.categories').innerHTML = '');
}
// clearList();
