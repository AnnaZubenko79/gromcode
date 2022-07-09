export const getTitle = () => document.querySelector('.title').textContent;
console.log(getTitle());

export const getDescription = () => document.querySelector('.about').innerText;
console.log(getDescription());

export const getPlans = () => document.querySelector('.plans').innerHTML;
console.log(getPlans());

export const getGoal = () => document.querySelector('.goal').outerHTML;
console.log(getGoal());
