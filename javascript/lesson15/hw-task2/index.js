export const createLogger = () => {
  const memory = [];
  function getRecords(type) {
    if (type === undefined) {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }
    return memory.filter(elem => elem.type === type).sort((a, b) => b.dateTime - a.dateTime);
  }
  function warn(message) {
    const memoryMessage = {
      message: `${message}`,
      type: 'warn',
      dateTime: new Date(),
    };
    memory.push(memoryMessage);
    return memory;
  }
  function error(message) {
    const memoryMessage = {
      message: `${message}`,
      type: 'error',
      dateTime: new Date(),
    };
    memory.push(memoryMessage);
    return memory;
  }
  function log(message) {
    const memoryMessage = {
      message: `${message}`,
      type: 'log',
      dateTime: new Date(),
    };
    memory.push(memoryMessage);
    return memory;
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger1 = createLogger();
console.log(logger1.log('User logged in'));
console.log(logger1.warn('User is tring to ented restricted page'));
console.log(logger1.log('User logged out'));
console.log(logger1.error('Unexpected error on the site'));

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
console.log(logger2.warn('Opps, something is happenning'));
console.log(logger2.getRecords('error')); // ===> []
console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords('error')); // ===> []
console.log(logger3.getRecords()); // ===> []
