const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];
const listElem = document.querySelector('.list');
const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

function updateTaskHandler(event) {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const checkedElem = event.target;
  const getElem = tasks.find(elem => elem.id === +checkedElem.dataset.id);
  getElem.done = checkedElem.checked;

  listElem.innerHTML = '';
  renderTasks(tasks);
}
const res = listElem.addEventListener('click', updateTaskHandler);
const createBtn = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

const getCreateTask = () => {
  if (inputElem.value === '') {
    return;
  }
  tasks.push({ id: tasks.length + 1, text: inputElem.value, done: false });
  inputElem.value = '';
  listElem.innerHTML = '';
  renderTasks(tasks);
};

createBtn.addEventListener('click', getCreateTask);
renderTasks(tasks);
