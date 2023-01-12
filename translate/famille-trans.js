var arrLang = {
    "fr": {

    // head
    "TITLE": "Droit de la famille en ligne de LégalQC",
    "KEYWORDS": "droit de la famille en ligne, divorce amiable, séparation à l'amiable pour couple marié et non-marié, garde d'enfants, annulation de la pension alimentaire, service d'aide à l'homologation, contrat de vie commune",

    "DESCRIPTION": "LégalQC offre des services en droit de la famille en ligne avec des tarifs avantageux. Les services juridiques disponibles en droit de la famille en ligne sont: divorce amiable, séparation à l'amiable pour couple marié et non-marié, garde d'enfants, annulation de la pension alimentaire, service d'aide à l'homologation, contrat de vie commune. Les services juridiques en ligne en droit de la famille de LégalQC permettent aux clients de gagner du temps et de l'argent ainsi qu'une meilleure accès à la justice grâces à des technologies innovantes. LégalQC est dédié à offrir des services juridiques en droit de la famille en ligne avec des tarifs abordables et à la portée de tous.",
    

    // body
        // Navigation bar
    "SERVICES": "Services",
    "HOW": "Comment ça marche",
    "INFO-J": "Info juridique",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",

   


    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "LegalQC Online Family Law",
    "KEYWORDS": "online family law, joint divorce, joint separation for married and unmarried couple, child custody, child support cancellation, homologation assistance service, cohabitation contract",

    "DESCRIPTION": "LegalQC offers online family law services with affordable rates. Legal services available for online family law are: joint divorce, joint separation for married and unmarried couple, child custody, child support cancellation, homologation assistance service, cohabitation contract. LegalQC's online family law services allow clients to save time and money and to have better access to justice through innovative technologies. LegalQC is dedicated to offering online family law services at affordable rates for everyone",
    

    // body
        // Navigation bar
    "SERVICES": "Services",
    "HOW": "How it works",
    "INFO-J": "Legal Info",
    "CONTACT": "Contact",
    "CONSULTATION": "Online Consultation",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Lawyer - All rights reserved.",

  
 
    }
  };


 
// Function to choose iframe based on language

function go(url){
  document.getElementById('JotFormIFrame-223497824261259').src= url;
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
  go('https://form.jotform.com/MeSidiki/family-law-online?language=fr-CA&dropdown=hidden') ;

} else if (lang=== "en"){
  go('https://form.jotform.com/MeSidiki/family-law-online?language=en-CA&dropdown=hidden') ;
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
      go('https://form.jotform.com/MeSidiki/family-law-online?language=fr-CA&dropdown=hidden') ;
    
    } else if (lang=== "en"){
      go('https://form.jotform.com/MeSidiki/family-law-online?language=en-CA&dropdown=hidden') ;
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
