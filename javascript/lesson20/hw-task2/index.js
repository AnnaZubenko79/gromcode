export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    const usersName = this._users.map(elem => elem._name);
    console.log(usersName);
    return usersName;
  }
  getUserIds() {
    return this._users.map(elem => elem._id);
  }
  getUserNameById(elemId) {
    const searchByElemId = this._users.find(elem => elem._id === elemId);
    return searchByElemId._name;
  }
}

const user1 = new User('21', 'Ann', '48');
const user2 = new User('22', 'Jahn', '49');
const user3 = new User('23', 'Dann', '50');
const user4 = new User('24', 'Ban', '51');
const users = new UserRepository([user1, user2, user3, user4]);
console.log(users.getUserNames());
console.log(users.getUserIds());
console.log(users.getUserNameById('23'));
