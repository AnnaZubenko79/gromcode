function getKeys(obj) {
  Object.keys(obj).map(elem => console.log(elem));
}

// examples
console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }));
// prints ===>
// name
// city
// englishLevel
