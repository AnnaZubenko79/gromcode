export const wallet = {
  transactions: [50, 100, 30, -20, -120],
  getMax() {
    console.log(Math.max(...this.transactions));
  },
  getMin() {
    console.log(Math.min(...this.transactions));
  },
};
wallet.getMax();
wallet.getMin();
