export function squaredNumbers() {
  const dataNumbersArray = [...document.querySelectorAll('.number')];
  return dataNumbersArray.map(
    number => (number.dataset.squaredNumber = number.dataset.number ** 2),
  );
}

console.log(squaredNumbers());
