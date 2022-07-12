const paginationArray = Array.from(document.querySelectorAll('.pagination__page'));

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};
paginationArray.forEach(elem => elem.addEventListener('click', handleClick));
