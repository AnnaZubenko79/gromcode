export function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

// const sayHi = () => {
//   console.log('Hi');
// };
// // sayHi();

// const defferedSayHi = defer(sayHi, 1000);
// defferedSayHi();

// const sum = (a, b) => {
//   console.log(a + b);
// };
// const defferedSum = defer(sum, 1000);
// defferedSum(1, 4);
const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I am ${this.name}!`);
  },
};
const defferedHi = defer(user.sayHi, 1000);
defferedHi.call({ name: 'Bob' });
