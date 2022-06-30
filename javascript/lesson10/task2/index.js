function getParsedIntegers(arr) {
  return arr.map(elem => Number.parseInt(elem));
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
console.log(getParsedIntegers(arrOfIncomeData));

function getParsedIntegersV2(arr) {
  return arr.map(elem => parseInt(elem));
}
console.log(getParsedIntegersV2(arrOfIncomeData));

function getParsedFloats(arr) {
  return arr.map(elem => Number.parseFloat(elem));
}
console.log(getParsedFloats(arrOfIncomeData));

function getParsedFloatsV2(arr) {
  return arr.map(elem => parseFloat(elem));
}
console.log(getParsedFloatsV2(arrOfIncomeData));
