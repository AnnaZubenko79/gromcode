// algo
// write a function to clear the array
// choose a method which sort out array and method which cut excess symbols at elements of array
// concat sign $ with elements of array

// input: array
// output: new array

const cleanTransactionsList = arr => {
  return arr
    .map(elem => Number(elem))
    .filter(elem => elem === Number(elem))
    .map(elem => `$${Number(elem).toFixed(2)}`);
};
// ---testData
console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));
