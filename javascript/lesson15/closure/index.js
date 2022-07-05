function t1() {
  let a = 0;
  return function () {
    a += 1;
    // let a = 8;
    return a;
  };
}

const b = t1();
console.log(b());
const c = t1();
console.log(c());
console.log(c());
const a = 77;
console.log(a);
console.log(c());
console.log(b());
console.log(c());
console.log(b());
// console.log(one());
// console.log(one());
// console.log(one());
// console.log(one());
