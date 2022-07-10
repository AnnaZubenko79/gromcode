export function manageClasses() {
  document.querySelector('.one').classList.add('selected');
  document.querySelector('.two').classList.remove('selected');
  document.querySelector('.three').classList.toggle('three_done');
  const fourthElement = document.querySelector('.four');
  if (fourthElement.classList.contains('some-class')) {
    fourthElement.classList.add('another-class');
  }
}
manageClasses();
