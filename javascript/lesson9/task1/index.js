// const getAdults = obj =>
//   Object.entries(obj)
//     .filter(elem => elem[1] >= 18)
//     .map(user => user[0]);
const getAdults = obj => Object.keys(obj).filter(name => obj[name] >= 18);
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
