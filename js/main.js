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
    let newLocation;

    // Create an array with page sections 
    const pageSections = 
    [
      { esTitle: 'proyectos/',       enTitle: 'en/projects/' },
      { esTitle: 'colaboraciones/',  enTitle: 'en/collabs/' },
      { esTitle: 'entrevistas/',     enTitle: 'en/interviews/' },
      { esTitle: 'bio/',             enTitle: 'en/bio/' },
    ];

    // Create an array of subpages if they have different names (ENGLISH / SPANISH )
    const subpages = 
    [
      { 
        esTitle: 'proy-audiovisual/',
        enTitle: 'av-project/' 
      },
      { 
        esTitle: 'residencia-los-dos-ombues/',       enTitle: 'los-dos-ombues-residency/' 
      },
      { 
        esTitle: 'paraiso-en-blanco/',       enTitle: 'an-unsolved-blank-paradise/' 
      },
    ]

    // If current language is 'es', change to 'en' vesrion of the page
    if(pageLanguage == 'es') 
    {
      // First, change the Section
      pageSections.forEach(section => {
        if ( currentLocation.includes(section.esTitle) )
        {
          newLocation = currentLocation.replace(section.esTitle, section.enTitle);
        }
      })
      // Then, if on a subpage, change the subpage
      subpages.forEach(subpage => {
        if( newLocation.includes(subpage.esTitle) )
        {
          newLocation = newLocation.replace(subpage.esTitle, subpage.enTitle);
        }
      })

      // {
      //   case (currentLocation.includes('bio/')):
      //     locationES = locationES + 'bio/';
      //     locationEN = locationEN + 'bio/';
      //   break;
      //   case (currentLocation.includes('proyectos/')):
      //     locationES = locationES + 'proyectos/';
      //     locationEN = locationEN + 'projects/';
      //   break;
      //   case (currentLocation.includes('colaboraciones/')):
      //     locationES = locationES + 'colaboraciones/';
      //     locationEN = locationEN + 'collabs/';
      //   break;
      //   case (currentLocation.includes('entrevistas/')):
      //     locationES = locationES + 'entrevistas/';
      //     locationEN = locationEN + 'interviews/';
      //   break;
      //   default: 
      //     location.href;
      // }
      // location.href = currentLocation.replace(locationES, locationEN);
    }
    // If current language is 'en', change to 'es' vesrion of the page
    if(pageLanguage == 'en') 
    {
      // First, change the Section
      pageSections.forEach(section => {
        if ( currentLocation.includes(section.enTitle) )
        {
          newLocation = currentLocation.replace(section.enTitle, section.esTitle);
        }
      })
      // Then, if on a subpage, change the subpage
      subpages.forEach(subpage => {
        if( newLocation.includes(subpage.enTitle) )
        {
          newLocation = newLocation.replace(subpage.enTitle, subpage.esTitle);
        }
      })

      // {
      //   case (currentLocation.includes('bio/')):
      //     locationES = locationES + 'bio/';
      //     locationEN = locationEN + 'bio/';
      //   break;
      //   case (currentLocation.includes('projects/')):
      //     locationES = locationES + 'proyectos/';
      //     locationEN = locationEN + 'projects/';
      //   break;
      //   case (currentLocation.includes('collabs/')):
      //     locationES = locationES + 'colaboraciones/';
      //     locationEN = locationEN + 'collabs/';
      //   break;
      //   case (currentLocation.includes('interviews/')):
      //     locationES = locationES + 'entrevistas/';
      //     locationEN = locationEN + 'interviews/';
      //   break;
      //   default: 
      //     location.href;
      // }
      // location.href = currentLocation.replace(locationEN, locationES);
    }

    // Finally, got to location
    location.href = newLocation;

  }
}

langSelector.addEventListener('click', changePageLanguage);

/* For Collabs section only */
// let collabsSection;
// if(collabsSection = document.getElementById('collabs-section')) {
//   const collabsLists = document.querySelectorAll('.collabs-list');
// }

}