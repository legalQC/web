var arrLang = {
    "fr": {

    // head
    "TITLE": "Contact de LégalQC en droit de la famille en ligne",
    "KEYWORDS": "Contact LégalQC en droit de la famille, divorce, séparation, garde d'enfants, pension alimentaire, service d'aide à l'homologation, contrat de vie commune",

    "DESCRIPTION": "Vous pouvez contacter LégalQC pour des services en droit de la famille en ligne avec des tarifs avantageux. LégalQC est rejoingnable par téléphone, WhatsApp, SMS... LégalQC offre des services juridiques en ligne en droit de la famille avec des tarifs abordables et à la portée de tous: divorce, séparation, garde d'enfants, pension alimentaire, service d'aide à l'homologation, contrat de vie commune. N'hésitez surtout pas à communiquer avec LégalQC.",
    

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
    "TITLE": "Contact of LegalQC in family law online",
    "KEYWORDS": "Contact LegalQC in family law, divorce, separation, child custody, alimony, probate assistance service, cohabitation contract",

    "DESCRIPTION": "You can contact LegalQC for family law services online with affordable rates. LegalQC is reachable by phone, WhatsApp, SMS... LegalQC offers online legal services in family law with affordable rates: divorce, separation, child custody, child support, probate assistance, living together contract. Don't hesitate to contact LégalQC.",
    

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

