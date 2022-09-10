/* eslint-disable curly */
import {iosVhFix} from './utils/ios-vh-fix';
import {swap} from './modules/modals';
import {initFooter} from './modules/footer';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  const txtHideDesktop = document.querySelector('.introduction__txt-desk');
  const txtHideMobile = document.querySelector('.introduction__txt-mob');
  const introductionbtn = document.querySelector('.introduction__btn');

  txtHideDesktop.classList.remove('introduction__txt-desk--nojs');
  txtHideMobile.classList.remove('introduction__txt-mob--nojs');

  const readMore = () => {
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

  // initFormValidation();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initFooter();
    swap();
  });
});
