// export function sumOfSquares() {
//   return [].reduce.call(
//     arguments,
//     (acc, elem) => {
//       return acc + elem ** 2;
//     },
//     0,
//   );
// }
export function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
    return acc + elem ** 2;
  }, 0);
}
// test data
console.log(sumOfSquares(1, 2, 3));
console.log(sumOfSquares(1, 2, 3, -8, -1, 0));
