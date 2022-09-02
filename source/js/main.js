/* eslint-disable curly */
import {iosVhFix} from './utils/ios-vh-fix';
import {swap} from './modules/modals';
import {breakpoint, breakpointChecker} from './modules/adaptive';
import {initAboutButton} from './modules/about';
import {initFooter} from './modules/footer';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // initFormValidation();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initAboutButton();
    initFooter();
    swap();
    breakpointChecker();
    breakpoint.addListener(breakpointChecker);
  });
});
