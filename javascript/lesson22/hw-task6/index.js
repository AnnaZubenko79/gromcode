const arrayBtn = Array.from(document.querySelectorAll('.btn'));

const handleClick = event => {
  console.log(event.target.textContent);
};

arrayBtn.forEach(btn => btn.addEventListener('click', handleClick));
