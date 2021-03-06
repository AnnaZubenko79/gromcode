export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return request;
};

// requestUserData('user777')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// const req = requestUserData('broken');
// req
//   .then(data => {
//     data = 5;
//     console.log(data);
//     return data;
//   })
//   .catch(error => {
//     console.log(error);
//     throw new Error('Error');
//   })
//   .then(value => console.log(value * 2))
//   .catch(error => console.log(error));
// // req.then(data => console.log(data));
