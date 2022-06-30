function getFiniteNumbers(arr) {
  return arr.filter(elem => Number.isFinite(elem));
}

const arrOfIncomeData = [
  2,
  'text',
  15,
  15.25,
  16.1,
  Infinity,
  0,
  13.0,
  NaN,
  undefined,
  true,
  false,
  -15,
  48,
];
console.log(getFiniteNumbers(arrOfIncomeData));

function getFiniteNumbersV2(arr) {
  return arr.filter(elem => isFinite(elem));
}

console.log(getFiniteNumbersV2(arrOfIncomeData));

function getNaN(arr) {
  return arr.filter(elem => Number.isNaN(elem));
}

console.log(getNaN(arrOfIncomeData));

function getNaNV2(arr) {
  return arr.filter(elem => isNaN(elem));
}

console.log(getNaNV2(arrOfIncomeData));

function getIntegers(arr) {
  return arr.filter(elem => Number.isInteger(elem));
}

console.log(getIntegers(arrOfIncomeData));
