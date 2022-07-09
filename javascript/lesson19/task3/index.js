export function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }
  this.age = age;
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return age;
};

// test data
const user1 = new User('Tom', 17);
const user2 = new User('Bob', 21);
// console.log(user1.sayHi());
// user2.requestNewPhoto();
// user2.sayHi();
// user2.setAge(Infinity);
// user1.setAge(25);
// console.log(user1);
// console.log(user2.setAge(-1));

// console.log(user2.setAge(18));
// console.log(user2.setAge(25));
// user2.setAge(Infinity);
// user2.setAge(25);
// console.log(user1.setAge(0));
// console.log(user1);
// console.log(user1.setAge(-15));
// console.log(user1);
// console.log(user1.setAge(NaN));
// console.log(user1);
// console.log(user1.setAge(35));
console.log(user1);
