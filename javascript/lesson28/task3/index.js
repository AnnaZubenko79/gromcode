export const mult = a => b => a * b;
export const twice = mult(2);
const resultTwice = twice(7);
console.log(resultTwice);

export const triple = mult(3);
const resultTriple = triple(9);
console.log(resultTriple);
