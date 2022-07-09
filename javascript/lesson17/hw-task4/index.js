export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const userFullNameArr = fullName.split(' ');
    const [firstName] = userFullNameArr;
    const [, lastName] = userFullNameArr;
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
// ===test data
user.getFullName();
console.log(user.getFullName());
user.setFullName('Ivan Petro');
console.log(user.getFullName());
