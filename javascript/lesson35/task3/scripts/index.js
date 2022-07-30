import { fetchUserData, fetchRepositiries } from './getwayTasks.js';
import { renderUserData } from './usersTasks.js';
import { renderRepos, cleanReposList } from './repo.js';
import { showSpinner, hideSpinner } from './spin.js';

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

const defaultUser = {
  avatar_url: defaultAvatar,
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositiries(url))
    .then(repoList => {
      renderRepos(repoList);
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

showUserBtnElem.addEventListener('click', onSearchUser);
