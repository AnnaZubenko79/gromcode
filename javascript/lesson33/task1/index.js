// algo
// 1. получить нужные для реализации задачи данные с DOM (.user__avatar, .user__name,
//  .user__location, .name-form__btn, .name-form__input)
// 2. передаем в .user__location url
// 3. добавляем в обработчик событие click при нажатии на .name-form__btn
// 4. пишем функцию котораяпо клику считывает имя пользователя onSearchUser и передаем дальше
// управление ф-м, которые делают запросы
// 4.1 получаем данные с сервера
// 4.2 нужно получить данные с инпута
// 5. пишем ф-ю, которая непосредственно будет производить запрос fetchUserData
// 5.1 ф-я fetch, возвращает промис, на который мы подписываемся и получаем объект response
// 5.2 из ф-ции мы теперь получаем промис, на который можем подписаться в onSearchUser
// 6. пишем ф-ю

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(response => response.json());
};

const renderUserData = userData => {
  //   console.log(userData);
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);
