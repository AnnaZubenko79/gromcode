const mergeObjectsV1 = (obj1, obj2) => Object.assign({}, obj1, obj2);

const mergeObjectsV2 = (obj1, obj2) => Object.assign({}, obj2, obj1);

const mergeObjectsV3 = (obj1, obj2) => ({ ...obj1, ...obj2 });
const mergeObjectsV4 = (obj1, obj2) => ({ ...obj2, ...obj1 });
// function mergeObjectsV4(obj1, obj2) {
//   const { ...newObj } = obj2;
//   const { ...mergObj } = obj1;
//   const mergeObj = { ...newObj, ...mergObj };
//   return mergeObj;
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(obj1, obj2);
