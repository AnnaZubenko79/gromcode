const getTotalPrice = arr => {
  const sumElemOfArr = arr.reduce((sum, elem) => sum + elem);
  const sumOfRound = `$${Math.floor(sumElemOfArr * 100) / 100}`;
  return sumOfRound;
};

const dataArray = [6.1115, 6.11, 6.12, 6.1135, 6.11];
console.log(getTotalPrice(dataArray));
