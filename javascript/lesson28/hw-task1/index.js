export const shmoment = initValue => {
  let resDate = new Date(initValue);
  const dateRes = {
    result() {
      return resDate;
    },
    add(date, value) {
      const timeAdd = {
        milliseconds: value => resDate.setMilliseconds(resDate.getMilliseconds() + value),
        seconds: value => resDate.setSeconds(resDate.getSeconds() + value),
        minutes: value => resDate.setMinutes(resDate.getMinutes() + value),
        hours: value => resDate.setHours(resDate.getHours() + value),
        days: value => resDate.setDate(resDate.getDate() + value),
        months: value => resDate.setMonth(resDate.getMonth() + value),
        years: value => resDate.setFullYear(resDate.getFullYear() + value),
      };
      resDate = new Date(timeAdd[date](value));
      return this;
    },
    subtract(date, value) {
      const timeSubtr = {
        milliseconds: value => resDate.setMilliseconds(resDate.getMilliseconds() - value),
        seconds: value => resDate.setSeconds(resDate.getSeconds() - value),
        minutes: value => resDate.setMinutes(resDate.getMinutes() - value),
        hours: value => resDate.setHours(resDate.getHours() - value),
        days: value => resDate.setDate(resDate.getDate() - value),
        months: value => resDate.setMonth(resDate.getMonth() - value),
        years: value => resDate.setFullYear(resDate.getFullYear() - value),
      };
      resDate = new Date(timeSubtr[date](value));
      return this;
    },
  };
  return dateRes;
};

// const result = shmoment(new Date(2022, 2, 24)).add('months', 3).subtract('days', 7).result();
const result = shmoment(new Date(2022, 2, 24)).subtract('days', 7).add('months', 3).result();

console.log(result);
