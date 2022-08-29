import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initFooter} from './modules//modals/footer';
/* eslint-disable curly */

// ---------------------------------

// Utils
// ---------------------------------

// Modules
// ---------------------------------

// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initModals();
    initFooter();
  });

  // Показать/скрыть текст блока 'О компании'
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

  // Modal
  let m = document.querySelector('.modal');
  let p = document.querySelector('.page-body');

  function swap() {
    p.parentNode.insertBefore(m, p);
  }
  swap();

  let btnСallback = document.querySelector('[data-open-modal]');

  let modal = document.querySelector('.modal');
  let modalAdvance = document.querySelector('.modal-success');
  let modalOff = document.querySelectorAll('.modal__off');
  let closePopupModal = document.querySelectorAll('.modal__popup');

  let modalForm = modal.querySelector('form');
  let modalLogin = modal.querySelector('[name=name]');
  let modalTel = modal.querySelector('[name=tel]');


  let isStorageSupport = true;
  let storage = '';

  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }

  // scroll-lock
  const offScroll = function () {
    document.body.classList.add('scroll-lock');
  };

  const onScroll = function () {
    document.body.classList.remove('scroll-lock');
  };

  btnСallback.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
    offScroll();

    if (storage) {
      modalLogin.value = storage;
      modalTel.focus();
    } else {
      modalLogin.focus();
    }
  });

  modalOff.forEach((el) => {
    el.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
      modalAdvance.classList.remove('modal-success--show');
      onScroll();
    });
  });

  modalForm.addEventListener('submit', function (evt) {
    if (modalLogin.value || modalTel.value) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
      modalAdvance.classList.add('modal-success--show');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', modalLogin.value);
      }
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains('modal--show')) {
        modal.classList.remove('modal--show');
        onScroll();
      }

      if (modalAdvance.classList.contains('modal-success--show')) {
        modalAdvance.classList.remove('modal-success--show');
        onScroll();
      }
    }
  });

  closePopupModal.forEach((el) => {
    el.addEventListener('click', function () {
      if (modal.classList.contains('modal--show')) {
        modal.classList.remove('modal--show');
        onScroll();
      }

      if (modalAdvance.classList.contains('modal-success--show')) {
        modalAdvance.classList.remove('modal-success--show');
        onScroll();
      }
    });
  });

  // trapFocus

  function trapFocus(element) {
    let focusableEls = element.querySelectorAll('input[type="text"], input[type="tel"], textarea,  input[type="checkbox"], btn');
    let firstFocusableEl = focusableEls[0];
    let lastFocusableEl = focusableEls[focusableEls.length - 1];
    let KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
      let isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }
  trapFocus(modal);


  // Маска для номера телефона
  [].forEach.call(
      document.querySelectorAll('input[type="tel"]'),
      function (input) {
        let keyCode;
        function mask(event) {
          // eslint-disable-next-line no-unused-expressions
          event.keyCode && (keyCode = event.keyCode);
          // eslint-disable-next-line no-invalid-this
          let pos = this.selectionStart;
          // eslint-disable-next-line curly
          if (pos < 3) event.preventDefault();
          // eslint-disable-next-line one-var
          let matrix = '+7 (___) ___ ____',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            // eslint-disable-next-line no-invalid-this
            val = this.value.replace(/\D/g, ''),
            // eslint-disable-next-line camelcase
            new_value = matrix.replace(/[_\d]/g, function (a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
          // eslint-disable-next-line camelcase
          i = new_value.indexOf('_');
          // eslint-disable-next-line eqeqeq
          if (i != -1) {
            // eslint-disable-next-line no-unused-expressions
            i < 5 && (i = 3);
            // eslint-disable-next-line camelcase
            new_value = new_value.slice(0, i);
          }
          let reg = matrix
              // eslint-disable-next-line no-invalid-this
              .substr(0, this.value.length)
              .replace(/_+/g, function (a) {
                return '\\d{1,' + a.length + '}';
              })
              .replace(/[+()]/g, '\\$&');
          reg = new RegExp('^' + reg + '$');
          if (
            // eslint-disable-next-line no-invalid-this
            !reg.test(this.value) ||
          // eslint-disable-next-line no-invalid-this
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
          )
            // eslint-disable-next-line no-invalid-this, camelcase
            this.value = new_value;
          // eslint-disable-next-line eqeqeq, no-invalid-this
          if (event.type == 'blur' && this.value.length < 5) this.value = '';
        }

        input.addEventListener('input', mask, false);
        input.addEventListener('focus', mask, false);
        input.addEventListener('blur', mask, false);
        input.addEventListener('keydown', mask, false);
      }
  );
});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
