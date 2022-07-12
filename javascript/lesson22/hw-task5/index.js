const singleUseBtn = document.querySelector('.single-use-btn');

const getClick = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', getClick);
};

singleUseBtn.addEventListener('click', getClick);
