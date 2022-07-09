export const getOwnProps = obj => {
  const ownPropsArr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      ownPropsArr.push(prop);
    }
  }
  return ownPropsArr.filter(elem => typeof obj[elem] !== 'function');
};

// test data
const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  hasWheels: false,
  color: 'red',
  age: 2002,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);
console.log(getOwnProps(ship));
