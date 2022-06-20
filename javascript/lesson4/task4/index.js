// function getSum(startNum, endNum) {
//   let sumEven = 0;
//   for (let num = startNum; num <= endNum; num++) {
//     if (num % 2 === 0) {
//       sumEven += num;
//     }
//   }
//   return sumEven;
// }
// console.log(getSum(2, 5));

// function increaser(a, index) {
//   if (a > index) {
//     a += index;
//   }
//   return a;
// }
// console.log(increaser(6, 2));

// function getPrimes(num) {
//   nextNum: for (let i = 2; i <= num; i += 1) {
//     for (let j = 2; j < i; j += 1) {
//       if (i % j == 0) continue nextNum;
//     }
//     console.log(i);
//   }
// }
// getPrimes(11);
// let num = 31;

// let flag = true;
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     flag = false;
//     break; // выйдем из цикла
//   }
// }

// console.log(flag);

// function findDivCount(a, b, n) {
//   let result = 0;
//   for (let res = a; res <= b; res += 1) {
//     if (res % n === 0) {
//       result += 1;
//     }
//   }
//   return result;
// }

// console.log(findDivCount(1, 6, 3));
// console.log(Number.isInteger(5));
// let arr = [1, 2, 3, 4, 5, 6];

// const [start, start1, ...rest] = arr;
// console.log(start1, ...rest, start);

// function getArrayBounds(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     return [arr.length, arr[0], arr[arr.length - 1]];
//   }
// }

// // examples
// getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
// getArrayBounds(10, 12, 14); // ==> null
// getArrayBounds([1]); // ==> [1, 1, 1]

// function getSum(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     let sumNumbersOfArr = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sumNumbersOfArr += arr[i];
//     }
//     return sumNumbersOfArr;
//   }
// }

// // examples
// console.log(getSum([1, 10, -10, 4])); // ==> 5
// console.log(getSum([1])); // ==> 1
// console.log(getSum([-8, 8])); // ==> 0
// console.log(getSum(10, 12, 14)); // ==> null
// function getSpecialNumbers(from, to) {
//   let arrOfNumbers = [];
//   for (let num = from; num < to; num++) {
//     if (num % 3 === 0) {
//       arrOfNumbers.push(num);
//     }
//   }
//   return arrOfNumbers;
// }

// // examples
// console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
// console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
// console.log(getSpecialNumbers(1, 2)); // ==> [ ]

// function swap(numbers) {
//   const [first, ...rest] = numbers;
//   return [...rest, first];
// }

// function swapManual(numbers) {
//   const copyNumbers = numbers.slice();
//   let lastElem = copyNumbers.shift();
//   copyNumbers.push(lastElem);
//   return copyNumbers;
// }

// // examples
// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
// console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

// function createEmptyArray(len) {
//   const arr = [];
//   arr.length = len;
//   return arr;
// }
// createEmptyArray(10);

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     let copyArr = arr.slice();
//     let arrSquare = [];
//     for (let i = 0; i < copyArr.length; i++) {
//       arrSquare.push(copyArr[i] ** 2);
//     }
//     return arrSquare;
//   }
// }

// // examples
// console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
// console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
// console.log(squareArray([1])); // ==> [1]

// const checkSum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     let sumOfElem = 0;
//     for (let digit of arr) {
//       sumOfElem += digit;
//     }
//     return sumOfElem > 100;
//   }
// };

// // examples
// console.log(checkSum([10, 10, 10])); // ===> false
// console.log(checkSum([10, 99, 1])); // ===> true
// console.log(checkSum(-6, -3, 200)); // ===> null

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     let copyArr = arr.slice();
//     let increaseArr = [];
//     for (let num of copyArr) {
//       if (num % 2 === 0) {
//         num = num + delta;
//       }
//       increaseArr.push(num);
//     }
//     return increaseArr;
//   }
// };

// // examples
// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
// console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
// console.log(increaseEvenEl([], 120)); // ===> []

// const cloneArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     const copyArr = arr.slice();
//     return copyArr;
//   }
// };

// console.log(reverseArray([2, 5, 6, 8, 11, 9, 4]));

// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     let maxElem = arr[0];
//     let minElem = arr[0];

//     for (let num of arr) {
//       if (num > maxElem) {
//         maxElem = num;
//       } else if (num < minElem) {
//         minElem = num;
//       }
//     }
//     let sumElem = maxElem + minElem;
//     return sumElem > 1000;
//   }
// }
// console.log(checker([2, 5, 6, 8, 11, 9, 4]));

// function sortAsc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   } else {
//     array.sort(function (a, b) {
//       return a - b;
//     });
//     return array;
//   }
// }

// function sortDesc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   } else {
//     array.sort(function (a, b) {
//       return b - a;
//     });
//     return array;
//   }
// }

// function withdraw(clients, balances, client, amount) {
//   let balanceAfterTrans = 0;
//   for (let i = 0; i < clients.length; i++) {
//     if (client == clients[i] && amount <= balances[i]) {
//       balanceAfterTrans = balances[i] - amount;
//       balances[i] = balanceAfterTrans;
//       return balanceAfterTrans;
//     } else if (amount > balances[i]) {
//       return -1;
//     }
//   }
// }
// withdraw(['Anna', 'Sergey', 'Daria'], [1400, 87, 55], 'Anna', 1435);
// function getSubArray(arr, numberOfElements) {
//   let subArr = arr.slice(0, numberOfElements);
//   return subArr;
// }

// console.log(getSubArray([2, 5, 6, 8, 11, 9, 4], 3));

// const includes = (arr, num) => {
//   let digit = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       digit = true;
//       break;
//     }
//   }
//   return digit;
// };

// // examples
// console.log(includes([1, 4, 8, 3], 3)); // ==> true
// console.log(includes([1, 4, 8, 3], 5)); // ==> false

// function uniqueCount(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   } else {
//     let copyArr = array.slice();
//     copyArr.sort(function (a, b) {
//       return a - b;
//     });
//     let removeArr = [];
//     copyArr.forEach(function (elem) {
//       if (removeArr.indexOf(elem) === -1) {
//         removeArr.push(elem);
//       }
//     });
//     return removeArr.length;
//   }
// }
// console.log(uniqueCount([1, 4, 4, 55, 8, 3, 43, 55]));
// function getUniques(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   //console.log(arr);
//   let newArr = [];
//   arr.forEach(function (elem) {
//     if (newArr.indexOf(elem) === -1) {
//       newArr.push(elem);
//     }
//   });
//   return newArr;
// }

// let elem = count.indexOf(55);
// console.log(elem);

// const uniqueCount = count.filter(
//   (item, index) => index === count.indexOf(item)
// );

// console.log(copyCount);
// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   const copyArr = array.slice();
//   const copyCount = [];
//   for (let i = 0; i < copyArr.length; i += 1) {
//     if (i === copyArr.indexOf(copyArr[i])) {
//       copyCount.push(copyArr[i]);
//     }
//   }
//   return copyCount;
// }
// console.log(removeDuplicates(count));

// const getSpecialNumbers = (numbers) => numbers.filter((item) => item % 3 === 0);

// console.log(getSpecialNumbers(count));

// function sortDesc(arr) {
//   arr.sort((a, b) => b - a);
//   return arr;
// }

// const sortDesc = (arr) => arr.slice().sort((a, b) => b - a);

// console.log(sortDesc(count));
// console.log(count);
// const flatArray = (arr) =>
//   arr
//     .slice()
//     .flat()
//     .sort((a, b) => a - b);
// const flatArray = (arr) =>
//   arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);

// console.log(flatArray(count));
// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
//   allStudentsList
//     .filter((name) => !studentsForRetake.includes(name))
//     .map((name) => 'Good job, ' + name);

// // examples
// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

// const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []

// const squareArray = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map((num) => num ** 2);
// };
// console.log(squareArray(count));

// const reverseArray = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.slice().reverse();
// };
// console.log(reverseArray(count));
// console.log(count);
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.filter((num) => num % 2 === 0).map((elem) => elem + delta);
//   // const filterArr = arr.filter((num) => {
//   //   return num % 2 === 0;
//   // });
//   // const increaseEvenElem = filterArr.map((elem) => {
//   //   return elem + delta;
//   // });
//   // return increaseEvenElem;
// };
// console.log(increaseEvenEl(count, 2));

// const cloneArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return [...arr];
// };

// console.log(cloneArr(count));
// console.log(count);
// const sum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.reduce((startValue, increaseValue) => startValue + increaseValue);
// };
// console.log(sum(count));
// const arrNames = ['Sergey', 'Anna', 'Daria', 'Anastasia'];
// const filterNames = (arr, text) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.filter((item) => item.length > 5 && item.includes(text));
// };
// console.log(filterNames(arrNames, 'er'));
// const count = [1, 2, 3, 8, 12];
// const arrAverage = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.reduce((acum, item) => acum + item) / arr.length;
// };

// console.log(arrAverage(count));
// console.log(arrAverage(count));

// function withdraw(clients, balances, client, amount) {
//   const indexOfPerson = clients.indexOf(client);
//   // if (balances[indexOfPerson] < amount) {
//   //   return -1;
//   // }
//   return balances[indexOfPerson] < amount
//     ? -1
//     : (balances[indexOfPerson] -= amount);
// }

// const clientNames = ['Anna', 'Sergey', 'Daria'];
// const balance = [1400, 87, 55];
// console.log(withdraw(clientNames, balance, 'Anna', 450));
// console.log(balance);

// const commisions = {
//   UAH: (amount) => (amount < 1000 ? amount * 0.02 : amount * 0.01),
//   USD: (amount) => (amount < 5000 ? amount * 0.005 : amount * 0.0025),
//   EUR: (amount) => (amount < 3000 ? amount * 0.0075 : 0),
// };

// function countCommision(amount, currency) {
//   return commisions[currency](amount);
// }

// const positiveSum = (arr) =>
//   arr.filter((item) => item > 0).reduce((accum, item) => accum + item, 0);
// console.log(positiveSum([1, -2, 3, 4, 5]));

// const getSum = (start, end) => {
//   let number = start - 1;
//   return Array(end - start + 1)
//     .fill()
//     .map((el) => {
//       number += 1;
//       return (el = number);
//     })
//     .filter((el) => el % 2 === 0)
//     .reduce((acc, el) => (acc += el));
// };
// const flatArray = (arr) => arr.flat(Infinity).sort((a, b) => a - b);
// const count = [1, 2, 3, 8, 12, [1, 2, 3]];
// console.log(flatArray(count));
// function getSum(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.reduce((acc, num) => acc + num, 0);
// }

// // examples
// console.log(getSum([1, 10, -10, 4])); // ==> 5
// console.log(getSum([])); // ==> 1
// console.log(getSum([-8, 8])); // ==> 0
// console.log(getSum(10, 12, 14)); // ==> null

// function getSpecialNumbers(from, to) {
//   const num = from - 1;
//   const newArr = Array(to - from + 1).fill();
//   const copyArr = newArr.reduce((acc, numb) => {
//     return acc.push(numb / 3);
//   }, []);
//   return copyArr;
// }

//   // .map(() => {
//   //   num += 1;
//   //   return num;
//   // })
//   // .filter((num) => num % 3 === 0);
// }

// // examples
// console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
// console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
// getSpecialNumbers(1, 2); // ==> [ ]

// const euros = [27, 41.85, 46.5];
// const doubled = euros.reduce((total, amount) => {
//   total.push(amount % 3 === 0);
//   return total;
// }, []);

// console.log(doubled);

// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   return array.reduce(
//     (uniq, item) => (uniq.includes(item) ? uniq : [...uniq, item]),
//     []
//   ).length;
// }

// console.log(removeDuplicates([2, 5, 5, 9, 4, 6, 8, 11, 9, 4]));
const checker = (arr) =>
  !Array.isArray(arr)
    ? null
    : arr.reduce((a, b) => (a < b ? a : b)) +
        arr.reduce((a, b) => (a > b ? a : b)) >
      1000;

console.log(checker([2, 1000, 5, 9, 4, 6, 8, 11, 9, 4]));
