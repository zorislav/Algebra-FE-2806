'use strict';

// ZADATAK!
// 1. Uključite Handlebars biblioteku na stranicu koristeći CDN.
// 2. Proučite Pokemon API (https://pokeapi.co/)
// 3. Kreirajte XHR request na API koji dohvaća prvih 20 Pokemon vrsta koje su žute boje
// 4. Kreirajte HTML stiliziranu tablicu dobivenih rezultata koristeći Handlebars
// 5. Lista mora sadržavati:
//     - redni broj
//     - ime vrste koje je ujedno i link na API endpoint sa vise informacija o vrsti


//--------------------------------------------------------------------------
//opcija 1


/*
const source = document.getElementById('hb-template').innerHTML;
//dohvaćamo template - ulaz
const destination = document.getElementById('hb-result');
//dohvaćamo destinaciju di će se izvršiti naš div
const template = Handlebars.compile(source);
//Handlebars je objekt koji smo uploadali, na njega pozivamo metodu compile
//koja uzima ovaj gore source kao argument


//sada radimo http request, a ovaj API bi nam trebao vratiti sve pokemone žute boje
async function getpokemons(){
   const response = await fetch('https://pokeapi.co/api/v2/pokemon-color/yellow');
    const data = await response.json();
    //na response objekt idemo sa metodom .json() i ispred opet stavljamo await
    //jer ta metoda opet vraća promise
    return data.pokemon_species.slice(0,20);
}


//definicija funkcije koja će popuniti našu listu
function fillList(pokemons){
    const context = {
        pokemon: pokemons
        //svojstvo je pokemon jer je u htmlu(#each pokemon) a vrijednost je 
        //pokemons tj. lista svih onih pokemona koje smo dobili preko API-a
    };
    const html = template(context);
    //template smo gore definirali i uzimamo ga od ovog ovdi contexta
    destination.innerHTML = html;
    //znači naš div postaje ovaj html

}



getpokemons().then(pkmns => fillList(pkmns));
//obzirom da fukcija vraća promise stavljamo metodu .then() i unutar then 
//funkciju koja za parametar ima pkmns i printa to isto u konzoli

//ako pokrenemo program u live serveru dobijamo natrag objekt sa name: yellow
//i svojstvo pokemon_species i tu ih imamo 87 komada žuti hahaha!!!
//onda gore u konzoli dodamo na pkmns. to svojstvo i dobijemo u konzoli 87 redova
//Nama treba prvih 20 zato brišemo iz printa konzole pokemon_species i stavljamo
//ih gore na return data.pokemon_species.slice(0,20) zapravo na taj niz 
//primjenjujemo metodu slice i uzimamo prvih 20 komada!!!
//NA KRAJU U THEN FUNKCIJU UPISUJEMO FUNKCIJU FILLlIST OD GORE I PARAMETAR JE
//ISTO PKMNS

*/
//----------------------------------------------------------------------------
//Opcija 2  sa XMLHttprequest


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon-color/yellow',true);


function filllist (){
    const data = JSON.parse(xhr.response);
    const source = document.getElementById('hb-template').innerHTML;
    const template = Handlebars.compile(source);
    const context = {pokemon: data.pokemon_species.slice(0,20)};
    const html = template(context);
    document.getElementById('hb-result').innerHTML = html;
}

xhr.onload = function (){
    filllist();
}

xhr.send();