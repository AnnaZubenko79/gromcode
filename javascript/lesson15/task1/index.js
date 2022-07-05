export function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
const counter3 = makeCounter();
// testData
console.log('It is counter 1: ' + counter1());
console.log('It is counter 1: ' + counter1());
console.log('It is counter 1: ' + counter1());
console.log('It is counter 2: ' + counter2());
console.log('It is counter 2: ' + counter2());
console.log('It is counter 1: ' + counter1());
console.log('It is counter 1: ' + counter1());
console.log('It is counter 2: ' + counter2());
console.log('It is counter 3: ' + counter3());
console.log('It is counter 3: ' + counter3());
