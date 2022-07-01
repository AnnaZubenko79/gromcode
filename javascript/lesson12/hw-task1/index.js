// algo
// make string to Array =>
// define method of array that reverse array =>
// keep array as string
// if the argument is not string returnk null

const reverseString = str => (str !== String(str) ? null : str.split('').reverse().join(''));

// --testData
console.log(reverseString('I love JS'));
console.log(reverseString('love'));
console.log(reverseString(null));
console.log(reverseString(5289));
console.log(reverseString(true));
console.log(reverseString({ name: 'Sergey' }));
