// copy object
// const copyObj = obj => Object.assign({}, obj);

const copyObj = obj => ({ ...obj });

const myObj = { 'John Doe': 19, Tom: 17, Bob: 18 };
const newObj = copyObj(myObj);
newObj['John Doe'] = 20;
console.log(myObj);
console.log(newObj);
