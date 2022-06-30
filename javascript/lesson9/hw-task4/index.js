const getPeople = obj =>
  Object.values(obj)
    .flat()
    .map(elem => elem.name);
// const getPeople = obj =>
//   Object.values(obj)
//     .flat()
//     .map(({ _, name }) => name);
const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Peter' },
    { name: 'Sergey' },
    { name: 'Ivan' },
    { name: 'Andrey' },
  ],
  roms2: [{ name: 'Dan' }, { name: 'Mykola' }, { name: 'Alexey' }],
};

console.log(getPeople(rooms));
