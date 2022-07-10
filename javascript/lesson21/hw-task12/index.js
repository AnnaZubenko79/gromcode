export function getSection(num) {
  const dataSpan = document.querySelector(`span[data-number="${num}"]`);
  console.log(dataSpan);
  const parentElem = dataSpan.closest('.box');
  console.log(parentElem);
  return parentElem.dataset.section;
}
// console.log(getSection(3));
