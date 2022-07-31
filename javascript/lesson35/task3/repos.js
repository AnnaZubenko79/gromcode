const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
  listElem.innerHTML = '';
};

export const renderRepos = repoList => {
  const repoListElem = repoList.map(({ name }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('repo-list__item');
    listItemElem.textContent = name;

    return listItemElem;
  });
  listElem.append(...repoListElem);
};
