const bag = document.getElementById('hati');
bag.addEventListener('click', () => {
  bag.classList.toggle('bi-bag-check');
  if (bag.classList == 'bi-bag-check-fill') {
    bag.style.color = 'black';
  } else {
    bag.style.color = 'black';
  }
});
