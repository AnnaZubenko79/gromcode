export function squaredNumbers() {
  const dataNumbersArray = [...document.querySelectorAll('.number')];
  return dataNumbersArray.map(li => (li.dataset.squaredNumber = li.dataset.number ** 2));
}

console.log(squaredNumbers());
