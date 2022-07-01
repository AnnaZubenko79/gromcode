const countOccurrences = (text = '', str) => {
  if (str === '') {
    return null;
  }
  return text.split(str).length - 1;
};
// --testData
console.log(countOccurrences('The start index The(position) The.', 'the'));
console.log(countOccurrences('The start index The(position) The.', 'The'));
console.log(countOccurrences('The start index (position).', 'k'));
console.log(countOccurrences('The start index (position).', ''));
console.log(countOccurrences('', 'k'));
console.log(countOccurrences('k'));

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
