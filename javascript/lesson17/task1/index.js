const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.getFullName());
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   sayHi(age, message) {
//     console.log(`${message}. I am ${this.name}. I am ${age} years old`);
//   },
// };

// потеря контекста
// method .bind
// const func = user.getFullName.bind({ name: 'Tom' });

// method call
// const func = user.sayHi;
// console.log(func.apply({ name: 'Tom' }, [17, 'hello']));

// console.log(func());
