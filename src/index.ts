import './index.scss';

const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card__wrapper');
const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.card__radio-select');
const buylinks: NodeListOf<HTMLElement> = document.querySelectorAll('.card__buy-link');

cards.forEach((card) => {
  card.addEventListener('mouseout', function () {
    const checkbox = card.previousElementSibling as HTMLInputElement;
    if (checkbox.checked) {
      card.classList.add('card__wrapper--selected');
    }
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('input', function () {
    const card = checkbox.nextElementSibling as HTMLElement;
    if (!checkbox.checked) {
      card.classList.remove('card__wrapper--selected');
    }
  });
});

buylinks.forEach((link) => {
  link.addEventListener('click', function () {
    if (link.hasAttribute('data-label')) {
      const id = link.getAttribute('data-label');
      const checkbox = document.querySelector(`#${id}`) as HTMLInputElement;
      if (!checkbox.disabled) checkbox.checked = true;
    }
  });
});
