import { reverseArray, withdraw, getAdults } from './index.js';

it('should be array', () => {
  const result = reverseArray('');
  expect(result).toEqual(null);
});

it('should be reverseAray', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 2, 1]);
});

it('should not be modified the input array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);
  expect(result).not.toEqual([1, 2, 3, 4, 5]);
});

it('should return amount', () => {
  const result = withdraw(['Anna', 'Sergey', 'Daria'], [1000, 87, 55], 'Anna', 500);
  expect(result).toEqual(500);
});
it('should return amount', () => {
  const result = withdraw(['Anna', 'Sergey', 'Daria'], [1000, 87, 55], 'Sergey', 37);
  expect(result).toEqual(50);
});
it('should return amount', () => {
  const result = withdraw(['Anna', 'Sergey', 'Daria'], [1000, 87, 55], 'Daria', 35);
  expect(result).toEqual(20);
});
it('should return -1 when there is not enough balance', () => {
  const result = withdraw(['Anna', 'Sergey', 'Daria'], [1000, 87, 55], 'Anna', 1500);
  expect(result).toEqual(-1);
});
it('should return -1 when there is not enough balance', () => {
  const result = withdraw(['Anna', 'Sergey', 'Daria'], [1000, 87, 55], 'Sergey', 1500);
  expect(result).toEqual(-1);
});
it('should return -1 when there is not enough balance', () => {
  const result = withdraw(['Anna', 'Sergey', 'Daria'], [1000, 87, 55], 'Daria', 1500);
  expect(result).toEqual(-1);
});

it('should return object of people older 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});
it('should if passed empty object return empty object', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
it('should return new object of people older 18', () => {
  const obj = { 'John Doe': 19, Bob: 18 };
  const result = getAdults(obj);
  expect(obj).toEqual({ 'John Doe': 19, Bob: 18 });
});
