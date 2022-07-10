export function finishList() {
  const elemList = document.querySelector('.list');
  const elemSpecial = document.querySelector('.special');
  const preElemUl = document.createElement('li');
  const appendElemUl = document.createElement('li');
  const beforeElemFive = document.createElement('li');
  const afterElemFive = document.createElement('li');
  elemList.prepend(preElemUl);
  elemList.firstChild.textContent = '1';
  elemList.append(appendElemUl);
  elemList.lastChild.textContent = '8';
  elemSpecial.before(beforeElemFive);
  elemSpecial.previousSibling.textContent = '4';
  elemSpecial.after(afterElemFive);
  elemSpecial.nextSibling.textContent = '6';
}
finishList();
