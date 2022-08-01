import { fetchUserData, fetchRepositiries } from './gateway.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

const defaultUser = {
  avatar_url: defaultAvatar,
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;

  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);

    const reposList = await fetchRepositiries(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }
};

showUserBtnElem.addEventListener('click', onSearchUser);
