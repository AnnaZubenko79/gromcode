import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should make absolute all numbers and square the minnumber', () => {
  const result = getMinSquaredNumber([-2, 3, -4, 5]);
  expect(result).toEqual(4);
});
it('should check if the array is empty', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});
it('should check if the not array', () => {
  const result = getMinSquaredNumber('');
  expect(result).toEqual(null);
});
