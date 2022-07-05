export function createArrayOfFunctions(integerNum) {
  if (integerNum === undefined) {
    return [];
  }
  if (integerNum !== Number(integerNum)) {
    return null;
  }
  const arr = [];
  for (let i = 0; i < integerNum; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}
// console.log(arr);
console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions(6)[5]());
console.log(createArrayOfFunctions(6));
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions({}));
// export function createArrayOfFunctions(len) {
//   if (arguments.length === 0) {
//     return [];
//   }
//   if (typeof len !== 'number') {
//     return null;
//   }

//   let arr = [];
//   for (let i = 0; i < len; i++) {
//     arr[i] = function () {
//       return i;
//     };
//   }
//   return arr;
// }

// //---test data---
// console.log(createArrayOfFunctions());
// console.log(createArrayOfFunctions('9'));
// console.log(createArrayOfFunctions(9)[5]());
// console.log(createArrayOfFunctions(9)[8]());
