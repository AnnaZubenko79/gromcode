export const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
  },
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
  },
};

// console.log(callbackPrompt.showPrompt());
console.log(callbackPrompt.showDeferredPrompt(1000));
