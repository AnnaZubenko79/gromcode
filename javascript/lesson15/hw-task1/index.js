export const createCalculator = () => {
  let memoryNum = 0;

  function add(numSum) {
    memoryNum += numSum;
    return memoryNum;
  }
  function decrease(numDecr) {
    memoryNum -= numDecr;
    return memoryNum;
  }
  function reset() {
    memoryNum = 0;
    return memoryNum;
  }
  function getMemo() {
    return memoryNum;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
const calc1 = createCalculator();
const calc2 = createCalculator();

console.log(calc1.add(5));
console.log(calc1.decrease(5));
console.log(calc1.add(5));
console.log(calc1.add(5));
console.log(calc1.add(5));
console.log(calc2.decrease(5));
console.log(calc1.add(5));
console.log(calc1.add(5));
console.log(calc2.add(15));
console.log(calc2.decrease(5));
console.log(calc1.add(5));
console.log(calc2.add(1));
console.log(calc2.add(2));
console.log(calc2.add(35));
console.log(calc2.getMemo());
console.log(calc2.reset());
