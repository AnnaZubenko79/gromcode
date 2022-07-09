export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = `${(Math.random() * 1000).toFixed(0)};`;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = false;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = this.dateCreated;
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

const order1 = new Order(1001, 'Kiyv', 'Sell');
console.log(order1);
console.log(order1.checkPrice());
console.log(order1.confirmOrder());
console.log(order1.isValidType());

const order2 = new Order(50, 'Odessa', 'Buy');
console.log(order2);
console.log(order2.checkPrice());
console.log(order2.confirmOrder());
console.log(order2.isValidType());

const order3 = new Order(50, 'Odessa', 'yes');
console.log(order3);
console.log(order3.checkPrice());
console.log(order3.confirmOrder());
console.log(order3.isValidType());
console.log(order3.price);
console.log(order3.city);
console.log(order3.type);
console.log(order3.id);
