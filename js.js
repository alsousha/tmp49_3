function toggleClass(elem, idDiv) {
  console.log(idDiv);
  const currentBtn = document.querySelector('.btn.active');
  currentBtn.classList.remove('active');
  elem.classList.add('active');

  const currentDiv = document.querySelector('.context.active');
  currentDiv.classList.remove('active');
  const div = document.getElementById(idDiv);
  div.classList.add('active');
}
