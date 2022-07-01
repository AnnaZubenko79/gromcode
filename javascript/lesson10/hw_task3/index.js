const superRound = (num, prec) => {
  const precNum = Math.pow(10, prec);
  return [
    Math.floor(num * precNum) / precNum,
    Math.trunc(num * precNum) / precNum,
    Math.ceil(num * precNum) / precNum,
    Math.round(num * precNum) / precNum,
    +num.toFixed(prec),
  ];
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
