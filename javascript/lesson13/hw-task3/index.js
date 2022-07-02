export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};
console.log(reverseArray([1, 2, 3, 4, 5]));

export function withdraw(clients, balances, client, amount) {
  const indexOfPerson = clients.indexOf(client);
  return balances[indexOfPerson] < amount ? -1 : (balances[indexOfPerson] -= amount);
}
console.log(withdraw(['Anna', 'Sergey', 'Daria'], [1400, 87, 55], 'Anna', 450));

export const getAdults = obj => {
  const copyObj = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      copyObj[key] = obj[key];
    }
  }
  return copyObj;
};

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
