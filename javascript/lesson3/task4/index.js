/* оператор || (OR) */
console.log('false || true:', false || true);
console.log('false || true || false:', false || true || false);
console.log('false || false || false:', false || false || false);
console.log('false && true:', false && true);
console.log('false && true && false:', false && true && false);
console.log('true && true && true:', true && true && true);
console.log("'text' || false:", 'text' || false);
console.log("true || 'text':", true || 'text');
console.log(
  "undefined || null || 0 || '' || null:",
  undefined || null || 0 || '' || null
);

const customAmount = null; // не выводим
const defaultAmount = 17; // не выводим
const amount = customAmount || defaultAmount; // выводим значение переменной amount в формате console.log('amount:', amount);
console.log('amount:', amount);
// /* && находит первое ложное значение */
console.log("'text' && false:", 'text' && false);
console.log("true && 'text':", true && 'text');
console.log(
  "undefined && null && 0 && '' && null:",
  undefined && null && 0 && '' && null
);
console.log('!true:', !true);
console.log('!false:', !false);
console.log("!'text':", !'text');
console.log("!!'text':", !!'text');
