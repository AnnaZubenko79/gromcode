const getCustomersList = obj => {
  // const newObj = Object.entries(obj);
  // console.log(newObj);
  // const mapArr = newObj.map(( arr) => ({ ...arr, id[0] }));
  // console.log(mapArr);
  // const sortArr = mapArr.sort((a, b) => a.age - b.age);
  // return sortArr;
  // ===================================================
  // const newObj = Object.entries(obj);
  // console.log(newObj);
  // const mapArr = newObj.map(([id, arr]) => ({ ...arr, id }));
  // console.log(mapArr);
  // const sortArr = mapArr.sort((a, b) => a.age - b.age);
  // return sortArr;
  // ======================================================

  return Object.entries(obj)
    .map(([id, arr]) => ({ ...arr, id }))
    .sort((a, b) => a.age - b.age);
};
const customers = {
  'customers-id-1': {
    name: 'Will',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 19,
  },
  'customers-id-3': {
    name: 'Dan',
    age: 2,
  },
};

console.log(getCustomersList(customers));
