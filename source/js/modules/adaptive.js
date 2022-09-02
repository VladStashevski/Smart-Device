const breakpoint = window.matchMedia('(max-width:767px)');
const introButtonElement = document.querySelector('.intro__btn');
const aboutDescriptionFloatingElement = document.querySelector('p[data-about-text="adaptive"]');
const servicesTitleElement = document.querySelector('.services__title');
const callbackElement = document.querySelector('.callback');
const textareaElement = callbackElement.querySelector('label textarea');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    introButtonElement.innerHTML = 'бесплатная консультация';
    aboutDescriptionFloatingElement.innerHTML = 'Наши поставщики&nbsp;&mdash; мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND.';
    servicesTitleElement.innerHTML = 'Товары и&nbsp;услуги<br> Smart Device';
    textareaElement.rows = '7';
  } else {
    introButtonElement.innerHTML = 'получить бесплатную консультацию';
    aboutDescriptionFloatingElement.innerHTML = 'Наши поставщики&nbsp;&mdash; мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и&nbsp;комплектующие Service Devices применяются на&nbsp;предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';
    servicesTitleElement.innerHTML = 'Smart Device предлагает следующие товары и&nbsp;услуги';
    textareaElement.rows = '5';
  }
};

export {breakpoint, breakpointChecker};
