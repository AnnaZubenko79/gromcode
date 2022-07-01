const splitString = (str, num = 10) => {
  if (typeof str !== 'string') {
    return null;
  }
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let bitStr = str.substr(startPosition, num);
    if (bitStr.length === 0) {
      break;
    }

    if (bitStr.length < num) {
      bitStr = bitStr.concat('.'.repeat(num - bitStr.length));
    }
    strArr.push(bitStr);
    startPosition += num;
  }
  return strArr;
};
// --testData
const testStr =
  'Метод fill() заполняет все элементы массива статическим значением.Можно указать индекс для начала и окончания fill(). По умолчанию он изменяет весь массив.';
console.log(splitString(5, 3));
console.log(splitString(true, 3));
console.log(splitString(testStr, 20));
console.log(splitString(testStr));
