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