document.addEventListener('DOMContentLoaded', () => {
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

  // Timer
  const hours = document.querySelector('.timer-hours');
  const minuts = document.querySelector('.timer-minuts');
  const seconds = document.querySelector('.timer-seconds');
  let transformHours = +hours.textContent;
  let transformMinuts = +minuts.textContent;
  let transformSeconds = +seconds.textContent;


  function timer() {
    if (transformSeconds === 0) {
      if (transformMinuts === 0) {
        if (transformHours === 0) {
          transformHours = 12;
          hours.textContent = transformHours;
          transformMinuts = 46;
          minuts.textContent = transformMinuts;
          transformSeconds = 51;
          seconds.textContent = transformSeconds;
        } else {
          transformHours -= 1;
          hours.textContent = transformHours;
          transformMinuts = 59;
          minuts.textContent = transformMinuts;
          transformSeconds = 59;
          seconds.textContent = transformSeconds;
        }
      } else {
        transformSeconds = 59;
        seconds.textContent = transformSeconds;
        transformMinuts -= 1;
        minuts.textContent = transformMinuts;
      }
      
    } else {
      transformSeconds -= 1;
      seconds.textContent = transformSeconds;
    }
  }

  const interval = setInterval(timer, 1000);
});