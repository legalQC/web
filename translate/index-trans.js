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

    "T1":"Développer",
    "T2":"DES SOLUTIONS JURIDIQUES EN LIGNE",
    "T3":"à la portée de tous.",
    "T4":"Comment ça marche",
    "T5":"SERVICES JURIDIQUES EN LIGNE",
    "T6":"LégalQC offre exclusivement des services juridiques en ligne avec des tarifs avantageux. Avec des techologies innovantes, nos clients gagnent du temps et de l'argent ainsi qu'une meilleure accès à la justice. Nous offrons sur notre portail un large éventail de services juridiques en droit familial, droit corporatif et des affaires, droit civil, droit d'immigration, et préparation des dossiers pour la Cour des pétites créances etc. Tous Les services sont offerts par un avocat membre du Barreau du Québec (Canada). LégalQC est dédié à offrir des solutions juridiques en ligne avec des tarifs abordables et à la portée de tous.",
    "T7":"Droit de la famille",
    "DISPO":"Consultez les services disponibles",
    "T8":"Droit corporatif & des affaires",
    "T9":"Droit civil",
    "T10":"Droit d'immigration",
    "T11":"Préparation - Petites Créances",
    "T12":"",
    "T13":"",



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

    "T1": "Develop",
    "T2": "ONLINE LEGAL SOLUTIONS",
    "T3": "for everyone",
    "T4": "How it works",
    "T5": "ONLINE LEGAL SERVICES",
    "T6": "LegalQC offers exclusively online legal services with advantageous rates. With innovative technologies, our clients save time and money and have better access to justice. We offer through our portal a wide range of legal services in family law, corporate and business law, civil law, immigration law, and preparation of files for the Court of Small Claims etc. All services are offered by a lawyer member of the Quebec Bar (Canada). LegalQC is dedicated to offering online legal solutions with affordable rates for everyone",
    "T7": "Family Law",
    "DISPO": " Check available services",
    "T8": "Corporate & Business Law",
    "T9": "Civil Law",
    "T10": "Immigration Law",
    "T11": "Preparation - Small Claims",
 
    }
  };


 
// The default language is English
var lang = "fr";
// Check for localStorage support
if('localStorage' in window){

var usrLang = localStorage.getItem('uiLang');
if(usrLang) {
 lang = usrLang
}

}

// handling request for  appropriate form based on user language


        // *******code here*********

    // end here - request handling 


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

        // *******code here*********

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