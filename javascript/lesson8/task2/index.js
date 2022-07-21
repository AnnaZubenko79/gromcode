// =====================================
// const concatProps = obj => {
//   let arr = [];
//   for (let key in obj) {
//     arr.push(obj[key]);
//   }
//   return arr;
// };

// ========================================
const concatProps = obj => {
  return Object.values(obj);
};

// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
