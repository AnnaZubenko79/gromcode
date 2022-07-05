let memoryNum = 0;

export function add(numSum) {
  memoryNum += numSum;
}

export function decrease(numDecr) {
  memoryNum -= numDecr;
}

export function reset() {
  memoryNum = 0;
}
export function getMemo() {
  return memoryNum;
}
const calc = {
  add,
  decrease,
  reset,
  getMemo,
};

calc.add(5);
calc.decrease(3);
calc.reset();
calc.getMemo();
