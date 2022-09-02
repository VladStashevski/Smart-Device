const siteSectionsElement = document.querySelector('.page-footer__site-sections');
const contactsElement = document.querySelector('.page-footer__contacts');

const siteSectionTitleElement = siteSectionsElement.querySelector('.site-sections__title');
const contactsTitleElement = contactsElement.querySelector('.contacts__title');

const siteSectionsListElement = siteSectionsElement.querySelector('.site-sections__list');
const contactsListElement = contactsElement.querySelector('.contacts__list');

function onSiteSectionsTitleClick() {
  if (siteSectionsListElement.style.display === '') {
    siteSectionsListElement.style.display = 'flex';
    siteSectionsElement.classList.add('is-opened');
    contactsListElement.style.display = '';
    contactsElement.classList.remove('is-opened');
  } else {
    siteSectionsListElement.style.display = '';
    siteSectionsElement.classList.remove('is-opened');
  }
}

function onContactsTitleClick() {
  if (contactsListElement.style.display === '') {
    contactsListElement.style.display = 'flex';
    contactsElement.classList.add('is-opened');
    siteSectionsListElement.style.display = '';
    siteSectionsElement.classList.remove('is-opened');
  } else {
    contactsListElement.style.display = '';
    contactsElement.classList.remove('is-opened');
  }
}

export const initFooter = () => {
  siteSectionsElement.classList.remove('page-footer__site-sections--nojs');
  contactsElement.classList.remove('page-footer__contacts--nojs');

  siteSectionTitleElement.addEventListener('click', onSiteSectionsTitleClick);
  contactsTitleElement.addEventListener('click', onContactsTitleClick);
};
