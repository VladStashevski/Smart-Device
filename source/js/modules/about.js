const txtHideDesktop = document.querySelector('.introduction__txt-desk');
const txtHideMobile = document.querySelector('.introduction__txt-mob');
const introductionbtn = document.querySelector('.introduction__btn');

txtHideDesktop.classList.remove('introduction__txt-desk--nojs');
txtHideMobile.classList.remove('introduction__txt-mob--nojs');

export const readMore = () => {
  if (txtHideDesktop.classList.contains('introduction__txt-desk--hidden')) {
    txtHideDesktop.classList.remove('introduction__txt-desk--hidden');
    introductionbtn.innerHTML = 'Скрыть';
  } else {
    txtHideDesktop.classList.add('introduction__txt-desk--hidden');
    introductionbtn.innerHTML = 'Подробнее';
  }

  if (txtHideMobile.classList.contains('introduction__txt-mob--hidden')) {
    txtHideMobile.classList.remove('introduction__txt-mob--hidden');
    introductionbtn.innerHTML = 'Скрыть';
  } else {
    txtHideMobile.classList.add('introduction__txt-mob--hidden');
    introductionbtn.innerHTML = 'Подробнее';
  }
};

introductionbtn.addEventListener('click', readMore);

