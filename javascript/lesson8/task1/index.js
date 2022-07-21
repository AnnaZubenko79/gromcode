// =====================================================
// const transformToObject = arr => {
//   const redArr = arr.reduce((obj, key) => {
//     const res = { ...obj, [key]: key };
//     console.log('obj: ', obj);
//     console.log('[key]: ', [key]);
//     console.log('key: ', key);
//     return res;
//   }, {});
//   return redArr;
// };

// =======================================================
// const transformToObject = arr => {
//   const obj = {};
//   arr.forEach(el => {
//     obj[el] = el;
//   });

//   return obj;
// };

// ===========================================================
const transformToObject = arr => arr.reduce((obj, key) => ({ ...obj, [key]: key }), {});

// // examples
console.log(transformToObject([])); // ==> {}
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
