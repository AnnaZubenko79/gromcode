/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  const copyObj = { id: userId };
  const newObj = Object.assign(userData, copyObj);
  return newObj;
}

function addPropertyV3(userData, userId) {
  const copyObj = Object.assign({}, userData);
  copyObj.id = userId;
  return copyObj;
}

function addPropertyV4(userData, userId) {
  const copyObj = { ...userData };
  copyObj.id = userId;
  return copyObj;
}

// examples
const user = {
  name: 'Sam',
};

const myObj = addPropertyV4(user, '1234567');
console.log(myObj); // ==> { name: 'Sam', id: '1234567' }
console.log(user);
