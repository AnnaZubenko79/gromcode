// input: Array;
// output: filter Array

// algo:
// создаем функцию в аргументы которой передаем массив
// с помощью метода filter возвращаем новый массив с числами кратными 3
// вызываем функцию

// filter
// input: callback
// output: new array with correctly numbers

// callback
// input: el of array
// output: boolean
const getSpecialNumbers = arr => arr.filter(num => num % 3 === 0);

const myArr = [1, 2, 3, 4, 5, 6, -6, -9, 0];
console.log(getSpecialNumbers(myArr));
console.log(myArr);
