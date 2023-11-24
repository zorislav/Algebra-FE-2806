
//1. Zadatak -  Nadite prototip objekta "character" (naputak:
 //koristite metode globalnog Object objekta).Nadite prototip tog prototipa. Ispisite ih.


var character = {
    name: 'Eleven',
    show: 'Stranger Things',
    portrayedBy: 'Millie Bobby Brown'
  }
  

  const quotes = [
      'I\'m going to my friends. I\'m going home.', 
      'Pure fuel! PURE FUEL! WOO!', 
      'See? Zoomer.', 
      'Bitchin.'
  ];


 var proto1 = Object.getPrototypeOf(character);


  console.log(proto1);//konzola daje objekt!

  var proto2 = Object.getPrototypeOf(proto1);
  console.log(proto2);// konzola daje null - prototip Objekta Objek je null!!!
  //Zapravo to znači da smo došli do krajnjeg objekta u toj hijerarhiji i nema dalje
  //ako je prototip null!!!

  //2. Zadatak -  Dodajte prototipu objekta "character" 
  //funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes".

  proto1.getQuote = function(){
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  
console.log(character.getQuote());

  //aha sad smo prototipu dodijelili ovu metodu, a nasljeđuje ga i naš objekt i 
  //onda je možemo pozvati/koristiti na našem objektu!!! NASLJEĐIVANJE!!!

  //zanimljivo, još proučit
  //console.log(Math.floor(Math.random() * quotes.length));


  
  //2. / drugi način b-opcija

  //na naš objekt stavljamo metodu proto i ona nam daje prototip našeg objekta i s njim dalje radimo
  character.__proto__.getQuote2 = function(){
    return quotes[Math.floor(Math.random() * quotes.length)]
  };

  //console.log(character.getQuote2());

  character.__proto__;
  console.log(character.__proto__); // proto daje prototip našeg objekta