// Activate the selects
const element = document.querySelectorAll('.select');
element.forEach(e => {
  const choices = new Choices(e, {
    searchEnabled: false,
    sorter: () => {
      return false;
    },
    itemSelectText: '',
  });
});

// Sale cards active
const btnMore = document.querySelectorAll('.more-btn');

btnMore.forEach(element => {
  element.addEventListener('click', e => {
    const targetCard = e.currentTarget.closest('.sale__card');
    const targetSelect = targetCard.querySelector('.sale__card-selects');

    targetCard.classList.toggle('sale__card--active');
    targetSelect.classList.toggle('selects--active');
  });
});

// Burger menu
const burger = document.querySelector('.burger');
const cross = document.querySelector('.burger-cross');
const nav = document.querySelector('.header-bottom__nav');
const navLink = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  document.body.classList.toggle('stop-scroll');
});

cross.addEventListener('click', () => {
  nav.classList.remove('nav--active');
  document.body.classList.remove('stop-scroll');
});

navLink.forEach(e => {
  e.addEventListener('click', () => {
    nav.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');
  });
});