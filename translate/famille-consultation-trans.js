var arrLang = {
    "fr": {

    // head
    "TITLE": "Consultation jurdique avec un avocat en ligne en droit de la famille",
    "KEYWORDS": "Consultation jurdique avec un avocat en ligne en droit de la famille, divorce, garde d'enfants, pension alimentaire, separation, contrat de vie commune, service d'aide à l'homologation, annulation de la pension alimentaire",

    "DESCRIPTION": "Consultation juridique avocat un avocat en ligne en droit de la famille à tarif abordable, vous pouvez facilement et rapidement parler à un avocat pour obtenir le bon conseil juridique au bon moment dans les problèmes relatifs au droit de la famille, tels que le divorce, la garde des enfants, la pension alimentaire, la séparation, le contrat de cohabitation, le service d'aide à l'homologation et l'annulation de la pension alimentaire.",
    

    // body
        // Navigation bar
    "SERVICES": "Services",
    "HOW": "Comment ça marche",
    "CONTACT": "Contact",
    "CONSULTATION": "Consultation en ligne",
        // Footer
    "RIGHTS": "Services conçus et mis en oeuvre par ASC Avocat - Tous droits réservés",
      


    },
    //**********************************************************************

    "en": {

    // head
    "TITLE": "Online legal advice in family law",
    "KEYWORDS": "Online legal advice in family law, divorce, child custody, child support, separation, cohabitation contract, homologation assistance service, child support cancellation",

    "DESCRIPTION": "Online legal advice in family law with an affordable rate, you can easily and quickly talk to an attorney to get the right legal advice at the right time in family law issues, such as divorce, child custody, child support, separation, cohabitation contract, homologation assistance service, and child support cancellation. ",
    

    // body
        // Navigation bar
    "SERVICES": "Services",
    "HOW": "How it works",
    "CONTACT": "Contact",
    "CONSULTATION": "Online Consultation",
        // Footer
    "RIGHTS": "Services designed and implemented by ASC Lawyer - All rights reserved.",

 
    }
  };

// Function to choose iframe based on language

function go(url){
  document.getElementById('JotFormIFrame-223136961601249').src= url;
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
  go('https://form.jotform.com/MeSidiki/legal-consultation-online?language=fr-CA&dropdown=hidden') ;

} else if (lang=== "en"){
  go('https://form.jotform.com/MeSidiki/legal-consultation-online?language=en-CA&dropdown=hidden') ;
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
      go('https://form.jotform.com/MeSidiki/legal-consultation-online?language=fr-CA&dropdown=hidden') ;
    
    } else if (lang=== "en"){
      go('https://form.jotform.com/MeSidiki/legal-consultation-online?language=en-CA&dropdown=hidden') ;
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

