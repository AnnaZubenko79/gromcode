// input: Object; Array
// output: object

// algo
// перебрать object с помощью Object.entries()
// пройтись по созданному массиву фильтром и сравнить с входящим массивом
// преобразовать c fromEntries отфильтрованный массив в объект
// =============================================================
// const pickProps = (obj, props) => {
//   let copyObj = {};
//   for (let key in obj) {
//     if (props.includes(key)) {
//       copyObj[key] = obj[key];
//     }
//   }
//   return copyObj;
// };
// ===============================================================
// const pickProps = (obj, props) => {
//   const objEntr = Object.entries(obj);
//   // let newObj ={}
//   console.log(objEntr);
//   const redArr = objEntr.filter(([key]) => {
//     const res = props.includes(key);
//     return res;
//   });
//   return Object.fromEntries(redArr);
// };
// ====================================================================
// const pickProps = (obj, props) =>
//   Object.entries(obj).reduce(
//     (acc, [key, value]) => (props.includes(key) ? { ...acc, [key]: value } : acc),
//     {},
//   );

// =====================================================================
const pickProps = (obj, props) => {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => props.includes(key)));
};

// =====================================================================

// examples
const entriesObj = { a: 1, b: 2, c: 3 };
console.log(pickProps(entriesObj, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps(entriesObj, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
console.log(entriesObj);
