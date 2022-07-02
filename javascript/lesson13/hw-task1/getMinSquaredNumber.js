export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absNum = arr.map(num => Math.abs(num));
  return Math.min(...absNum) ** 2;
};
console.log(getMinSquaredNumber([-777, 3, -2, 45, -20]));
