// ====================================
// function getKeys(obj) {
//   const arr = [];
//   for (let key in obj) {
//     arr.push(key);
//   }
//   return arr;
// }

// ====================================
function getKeys(obj) {
  return Object.keys(obj);
}
const exObj = { name: 'John Doe', age: 17, interest: 'football' };
console.log(getKeys(exObj));
