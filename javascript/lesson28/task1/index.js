export const calc = initValue => {
  let result = initValue;
  const calculator = {
    result() {
      return result;
    },
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
  };
  return calculator;
};

const result = calc(3).div(10).add(2).subtract(5).mult(4).result();

console.log(result);
// const res = calc(0).add(5).mult(-4).div(-3).subtract(8).result();
// const res = calc(0).add('5').mult(NaN).div(-3).subtract(8).result();
// const res = calc(0).add(Infinity).mult(2).div(-3).subtract(8).result();
const res = calc('3').add(2).mult(2).div(-3).subtract(8).result();
console.log(res);
