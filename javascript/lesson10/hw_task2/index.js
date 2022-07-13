// input: num(length of create Array), num, num
// output: array
// algo:
// 1) created function
// 2) round up with Math.ceil from and to
// 3) compare from and to:
// 3.1) if from>=to return null
// 3.2) else create array and push this array with help map random numbers
const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);
  if (fromCeil >= toCeil) {
    return null;
  }

  return new Array(length)
    .fill()
    .map(elem => Math.trunc(Math.random(elem) * (toCeil - fromCeil) + fromCeil));
};

console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 25)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
