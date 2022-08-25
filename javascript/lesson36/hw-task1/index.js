export const getUsersBlogs = async usersData => {
  const usersDataFetch = usersData.map(userId =>
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(({ blog }) => blog),
  );
  const resArray = await Promise.all(usersDataFetch);
  return resArray;
};

getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
