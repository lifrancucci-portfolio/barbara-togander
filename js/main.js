function contentLoaded() {

const mainContainer = document.querySelector('.page_content');

/* MENU DISPLAY FOR MOBILE */
// Please adjust and check
if( mainContainer.classList.contains('home') ) 
{
  const mainTitle = document.getElementById('main-title');
  const mainNav = document.getElementById('main-navigation');

  mainTitle.addEventListener('click', function() {
    if(mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
    }
    else
    {
      mainNav.classList.add('active');
    }
  })
}
 
/* CHANGE LANGUAGE ON CLICK */ 
const langSelector = document.getElementById('lang-selector');
const translatableElements = document.querySelectorAll('.translatable-element');
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

  // If on homepage, just change items' lang (not page)
  if( mainContainer.classList.contains('home') ) 
  {
    switch( pageLanguage ) 
    {
      case 'en':
        pageLanguage = 'es';
        break;
      case 'es':
        pageLanguage = 'en';
        break;
      default:
        pageLanguage = 'es';
    }
    translateElement(pageLanguage);
  }
  // If not on homepage, change to corresponding lang site
  else 
  {
    // Check for current location
    let currentLocation = location.href;
    const locationEN = 'barbara-togander/en/';
    const locationES = 'barbara-togander/';

    // If current language is 'es', change to 'en' vesrion of the page
    if(pageLanguage == 'es') 
    {
      switch(true) 
      {
        case (currentLocation.includes('bio/')):
          locationES = locationES + 'bio/';
          locationEN = locationEN + 'bio/';
        break;
        case (currentLocation.includes('proyectos/')):
          locationES = locationES + 'proyectos/';
          locationEN = locationEN + 'projects/';
        break;
        case (currentLocation.includes('colaboraciones/')):
          locationES = locationES + 'colaboraciones/';
          locationEN = locationEN + 'collabs/';
        break;
        case (currentLocation.includes('entrevistas/')):
          locationES = locationES + 'entrevistas/';
          locationEN = locationEN + 'interviews/';
        break;
        default: 
          location.href;
      }
      location.href = currentLocation.replace(locationES, locationEN);
    }
    // If current language is 'en', change to 'es' vesrion of the page
    if(pageLanguage == 'en') 
    {
      switch(true) 
      {
        case (currentLocation.includes('bio/')):
          locationES = locationES + 'bio/';
          locationEN = locationEN + 'bio/';
        break;
        case (currentLocation.includes('projects/')):
          locationES = locationES + 'proyectos/';
          locationEN = locationEN + 'projects/';
        break;
        case (currentLocation.includes('collabs/')):
          locationES = locationES + 'colaboraciones/';
          locationEN = locationEN + 'collabs/';
        break;
        case (currentLocation.includes('interviews/')):
          locationES = locationES + 'entrevistas/';
          locationEN = locationEN + 'interviews/';
        break;
        default: 
          location.href;
      }
      location.href = currentLocation.replace(locationEN, locationES);
    }
  }
}

langSelector.addEventListener('click', changePageLanguage);

/* For Collabs section only */
// let collabsSection;
// if(collabsSection = document.getElementById('collabs-section')) {
//   const collabsLists = document.querySelectorAll('.collabs-list');
// }

}