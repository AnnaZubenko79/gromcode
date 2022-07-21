// input: object
// output: object
// algo
// create new Object
// iterrate input Object
// if value (obj[key]) >=18 send this value in new Object
// const getAdults = obj => {
//   const filterObj = {};
//   for (let key in obj) {
//     if (obj[key] >= 18) {
//       filterObj[key] = obj[key];
//     }
//   }
//   return filterObj;
// };
// ===============================================================
// const getAdults = obj => {
//   return Object.entries(obj).reduce((acc, [key]) => {
//     if (obj[key] >= 18) {
//       acc[key] = obj[key];
//     }
//     return acc;
//   }, {});
// };

// ================================================================
const getAdults = obj => {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => obj[key] >= 18));
};
// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
