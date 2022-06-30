const getRandomNumbers = (length, from, to) => {
  const arr = new Array(length);
  if (to - from < 1) {
    return null;
  }
  return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
};

console.log(getRandomNumbers(5, 5, 22));
console.log(getRandomNumbers(5, 22.2, 30)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 0, 3)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 5, -5)); // ==> [3, 3, 2, 3, 2]
