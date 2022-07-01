const sortContacts = (arr, isAsc = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.sort((a, b) => (!isAsc ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)));
};
// --testData
const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-77-77',
  },
  {
    name: 'John',
    phoneNumber: '666-77-77',
  },
  {
    name: 'den',
    phoneNumber: '555-77-77',
  },
  {
    name: 'JoHn',
    phoneNumber: '555-77-77',
  },
  {
    name: 'Anna',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Jane',
    phoneNumber: '444-77-77',
  },
];
const testString = 'sadfghjklkmnbhvg';
console.log(sortContacts(contacts, false));
