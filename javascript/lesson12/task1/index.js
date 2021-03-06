const calc = expression => {
  const [a, operator, b] = expression.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = a / b;
  }
  return `${expression} = ${result}`;
};
// --testData
console.log(calc('1 + 5'));
console.log(calc('1 * 5'));
console.log(calc('1 / 5'));
console.log(calc('1 - 5'));
