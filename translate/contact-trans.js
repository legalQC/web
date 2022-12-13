var arrLang = {
    "fr": {

    // head
    "TITLE": "LégalQC, services juridiques en ligne",
    "KEYWORDS": "Services jurdiques en ligne, Service jurdique en ligne, LégalQC, droit de la famille, petites créance, droit des affaires, droit corporatif, droit civil, droit d'immigration",

    "DESCRIPTION": "LégalQC offre exclusivement des services juridiques en ligne avec des tarifs avantageux en droit de la famille, préparation pour la cour petites créances, droit corporatif, droit des affaires, droit civil, et en droit d'immigration. Les clients gagnent du temps et de l'argent ainsi qu'une meilleure accès à la justice avec les services juridiques en ligne de LégalQC grâces à des technologies innovantes. LégalQC est dédié à offrir des services juridiques en ligne avec des tarifs abordables et à la portée de tous.",
    

    // body
        // Navigation bar
    "HOME": "Accueil",
    "HOW": "Comment ça marche",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",
      


    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "LegalQC, online legal services",
    "KEYWORDS": "Online legal services, Online legal service, LegalQC, family law, small claims, business law, corporate law, civil law, immigration law",

    "DESCRIPTION": "LegalQC offers exclusively online legal services with affordable rates in family law, small claims court preparation, corporate law, business law, civil law, and immigration law. Clients save time and money and gain better access to justice with LegalQC's online legal services through innovative technologies. LégalQC is dedicated to offering online legal services at affordable rates for all.",
    

    // body
        // Navigation bar
    "HOME": "Home",
    "HOW": "How it works",
    "CONTACT": "Contact",
    "CONSULTATION": "Online Consultation",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Lawyer - All rights reserved.",

 
    }
  };

// Function to choose iframe based on language

function go(url){
  document.getElementById('JotFormIFrame-223407096447257').src= url;
}
 
// The default language is English
var lang = "fr";
// Check for localStorage support
if('localStorage' in window){

var usrLang = localStorage.getItem('uiLang');
if(usrLang) {
 lang = usrLang
}

}

// handling request for appropriate form based on user language
if (lang=== "fr"){
  go('https://form.jotform.com/MeSidiki/legalqc-contact-form?language=fr-CA&dropdown=hidden') ;

} else if (lang=== "en"){
  go('https://form.jotform.com/MeSidiki/legalqc-contact-form?language=en-CA&dropdown=hidden') ;
}  

// end of handling above request

console.log(lang);

  $(document).ready(function() {

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  // get/set the selected language

   $(".translate").click(function() {
     var lang = $(this).attr("id");

    //  // handling request for proposal form based on selected language
    if (lang=== "fr"){
      go('https://form.jotform.com/MeSidiki/legalqc-contact-form?language=fr-CA&dropdown=hidden') ;
    
    } else if (lang=== "en"){
      go('https://form.jotform.com/MeSidiki/legalqc-contact-form?language=en-CA&dropdown=hidden') ;
    }  
      // end here - handling selected language
     


    
    // update localStorage key
    if('localStorage' in window){
         localStorage.setItem('uiLang', lang);
         console.log( localStorage.getItem('uiLang') );
    }

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

