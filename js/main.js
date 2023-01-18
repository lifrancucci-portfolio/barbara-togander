function contentLoaded() {

/* CHANGE LANGUAGE ON CLICK */ 
const langSelector = document.getElementById('lang-selector');
const translatableElements = document.querySelectorAll('.translatable-element');
const mainContainer = document.querySelector('.page_content');
let pageLanguage = mainContainer.lang;

// Check for page language and display corresponding menu items:
function translateElement() {

  translatableElements.forEach(item => {
    const itemLanguage = item.lang;
    // If item lang is not the same as page lang, hide item
    if(itemLanguage !== pageLanguage) {
      item.style.display = 'none';
    } 
    // If it's the same, display it
    else
    {
      item.style.display = 'block';
    }

  });
}
translateElement();

// Navigate to corresponding page depending on the language set on main-container
function changePageLanguage() {

  let currentLocation = location.href;
  const locationEN = 'barbara-togander/en/';
  const locationES = 'barbara-togander/';

  if(pageLanguage === 'es') 
  {
    location.href = currentLocation.replace(locationES, locationEN);
  } 
  // If language is 'en' go to en/ folder
  else if(pageLanguage === 'en') 
  {
    location.href = currentLocation.replace(locationEN, locationES);
  }
}

langSelector.addEventListener('click', changePageLanguage);

/* For Collabs section only */
// let collabsSection;
// if(collabsSection = document.getElementById('collabs-section')) {
//   const collabsLists = document.querySelectorAll('.collabs-list');
// }

}