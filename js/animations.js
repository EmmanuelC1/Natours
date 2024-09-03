const navButton = document.querySelector('.navigation__checkbox');

function scrollToSection() {
  console.log('clicked');
  const isNavButtonChecked = document.querySelector(
    '.navigation__checkbox'
  ).checked;

  if (isNavButtonChecked) navButton.checked = false;
}

const navList = document.querySelectorAll('.navigation__item');
navList.forEach(item => {
  item.firstElementChild.addEventListener('click', scrollToSection);
});
