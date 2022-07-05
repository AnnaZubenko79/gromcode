// const countOccurrences = (text = '', str) => {
//   if (str === '') {
//     return null;
//   }
//   return text.split(str).length - 1;
// };
// --testData

// const countOccurrences = (text = '', str) => {
//   if (str === '') {
//     return null;
//   }
//   let counter = 0;
//   let position = text.indexOf(str);
//   while (position !== -1) {
//     counter += 1;
//     position = text.indexOf(str, position + 1);
//   }
//   return counter;
// };

// const countOccurrences = (text = '', str) => {
//   return str.length ? [...text.matchAll(str)].length : null;
// };

const countOccurrences = (text = '', str) => {
  if (str === '') {
    return null;
  }
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.substring(i, text.length - 1).includes(str)) {
      count++;
    }
  }
  return count;
};

console.log(countOccurrences('The start index The(position) The.', 'the'));
console.log(countOccurrences('The start index The(position) The.', 'The'));
// console.log(countOccurrences('The start index (position).', 'k'));
// console.log(countOccurrences('The start index (position).', ''));
// console.log(countOccurrences('', 'k'));
// console.log(countOccurrences('k'));
