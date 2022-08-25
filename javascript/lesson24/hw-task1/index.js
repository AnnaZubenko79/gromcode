// // input: Object;
// // output: Object;

const getDiff = (startDate, endDate) => {
  const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
  const difTimeDays = Math.trunc(diffTime / (1000 * 60 * 60 * 24));
  const difTimesHours = Math.trunc(diffTime / (1000 * 60 * 60)) % 24;
  const difTimesMin = Math.trunc(diffTime / (1000 * 60)) % 60;
  const difTimesSec = Math.trunc(diffTime / 1000) % 60;
  return `${difTimeDays}d ${difTimesHours}h ${difTimesMin}m ${difTimesSec}s`;
};
console.log(getDiff(new Date(2022, 2, 24, 20, 48, 43), new Date(2022, 3, 24, 22, 40, 45)));
console.log(getDiff(new Date(2023, 5, 24, 19, 40, 45), new Date(2022, 2, 24, 20, 48, 43)));

// // function getDiff(startDate, endDate) {
// //   const fromDate = new Date(startDate).getTime();
// //   const toDate = new Date(endDate).getTime();
// //   const differenceDate = Math.abs(new Date(toDate - fromDate).getTime());
// //   const oneDay = 1000 * 60 * 60 * 24;
// //   const getSeconds = new Date(differenceDate).getSeconds();
// //   const getMinutes = new Date(differenceDate).getMinutes();
// //   const getHours = new Date(differenceDate).getHours();
// //   const getDay = Math.round(differenceDate / oneDay);
// //   const result = `${getDay}d ${getHours}h ${getMinutes}m ${getSeconds}s`;
// //   return result;
// // }
