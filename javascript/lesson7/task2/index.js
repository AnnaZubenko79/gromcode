// input: array
// output: new sort array

// algo:
// создаем функцию в аргументы которой передаем массив
// создаем копию массива copyArr с помощью спредоператора
// с помощью метода sort сортируем скопированный массив и возвращаем его
// вызываем функцию

// sort
// input: none or callback (compareFunction)
// output: sort array

// callback
// input: sort data of array
// output: number (result of a-b, (-1, 1, 0)

// const sortDesc = arr => arr.sort((a, b) => b - a);

// const myArr = [1, 2, 3, 4, 5, 6, -6, -9, 0];
// console.log(sortDesc(myArr));

// const func = function () {
//   console.log(typeof arguments);
//   //   const arg = arguments;
//   //   console.log(typeof arg);
// };
// console.log(func(3, 5));
console.log('P'.codePointAt(0)); // 80 latin alphabet
console.log('Р'.codePointAt(0)); // 1056 cyrillic alphabet

let arr1 = [7, 14];
let arr2 = arr1;
// console.log(arr.at(0));

const numbers = [11, 22, 33, 44, 55];
const [a, b] = numbers; // деструктуризация
const [c, d, ...rest] = numbers; // ...три точки перед рест и есть спред оператор

function add(...rest) {
  return rest.reduce((total, current) => total + current);
}
console.log(add(1, 2)); // 3
