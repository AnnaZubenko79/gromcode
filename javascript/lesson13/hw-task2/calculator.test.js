import { calc } from './calculator.js';

it('should check that it is not string', () => {
  const result = calc([]);
  expect(result).toEqual(null);
});
it('should get sum', () => {
  const result = calc('1 + 2');
  expect(result).toEqual('1 + 2 = 3');
});
it('should get subtraction', () => {
  const result = calc('1 - 2');
  expect(result).toEqual('1 - 2 = -1');
});
it('should get multiply', () => {
  const result = calc('1 * 2');
  expect(result).toEqual('1 * 2 = 2');
});
it('should get divide', () => {
  const result = calc('2 / 2');
  expect(result).toEqual('2 / 2 = 1');
});
