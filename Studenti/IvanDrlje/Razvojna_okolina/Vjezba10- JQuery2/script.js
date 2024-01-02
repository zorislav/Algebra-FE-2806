'use strict';

// ZADATAK !
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


// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon-color/yellow',true);


// function filllist (){
//     const data = JSON.parse(xhr.response);
//     const source = document.getElementById('hb-template').innerHTML;
//     const template = Handlebars.compile(source);
//     const context = {pokemon: data.pokemon_species.slice(0,20)};
//     const html = template(context);
//     document.getElementById('hb-result').innerHTML = html;
// }

// xhr.onload = function (){
//     filllist();
// }

// xhr.send();


//-------------------------------------------------------------------------------

//ZADATAK 2
// 1. Uključite Bootstrap biblioteku u vašu stranicu sa prošle vježbe (CSS i JS).
// 2. Vašu tablicu pretvorite u Bootstrap tablicu.
// 3. Tablicu učinite responzivnom pomoću Bootstrapa tako da je u mobilnoj verziji vidljivo samo ime vrste bez rednog broja.
// 4. Na mobilnoj verziji dodajte popover element koji se pojavljuje na klik na ime vrste sa linkom na više informacija o vrsti.


//kada je document ready izvršavamo funkciju
$(document).ready(function (){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon-color/yellow',true);

    function addStripes(){
    $('table tr').removeClass('striped');   
     //selektiramo s pomoći JQuerya unutar table elementa sve tr elemente
     //i na njih mičemo klasu sa removeClass koja se zove striped
     $('table tr:nth-child(even)').addClass('striped');
     //selektiramo sve neparne djeca elemente i dodajemo im ovu klasu striped
    };


    function afterRender (){
        $('table th').css('color','darkBlue');
        //selektiramo table koji ima tr i onda metoda css koja prihvaća
        //dva argumenta css svojstvo i vrijednost!!!
        //$ označava JQuery objekt
        addStripes();



        $('table tr').on('mouseenter', event => {
            $(event.currentTarget).css('backgroundColor', 'yellow');
        });


        $('table tr').on('mouseleave', event =>{
        $(event.currentTarget).removeAttr('style')
         });



        setTimeout(function (){

           const hideElements =  $('table td a:contains("p")').filter(function (){
                return this.innerHTML.indexOf('p') == 0;
                //this se odnosi na pojedini element polja i gledamo da li je
                //njegov indexOf = 0, to znači da je slovo p na prvom mjestu

            })
            //selektiramo sve ancor elemente koji sadrže(contains) paragraf
            
            
            hideElements.closest('tr').remove();
            //closest funkcija vraća prvi sljedeći lelment koji je iznad našeg
            //elementa
            addStripes();

            $('<div></div>').insertAfter($('#hb-template')).text('Skriveno: ' + hideElements.length)
            //umećemo doslovno div elemenT

        }, 2000)

    }


    function filllist (){
        const data = JSON.parse(xhr.response);
        const source = document.getElementById('hb-template').innerHTML;
        const template = Handlebars.compile(source);
        const context = {pokemon: data.pokemon_species.slice(0,20), tableClass: 'table'};
        const html = template(context);
        document.getElementById('hb-result').innerHTML = html;

        $('[data-toggle="popover"]').popover();
        //ovo je povezano da kodom u HTML-u, tj. atributima na ancor elelmentu
        //to su oni data atributi
        afterRender();
    }

    xhr.onload = function (){
        filllist();
    }

    $(window).resize(() => {
        console.log($(window).width());
    });
    //s ovim ispisujemo veličinu ekrana u konzoli


    xhr.send();

});

//---------------------------------------------------------------------------
//druga opcija


// $(document).ready(function (){
//     const source = document.getElementById('hb-template').innerHTML;
//     const destination = document.getElementById('hb-result');
//     const template = Handlebars.compile(source);

//     function addStripes(){
//         $('table tr').removeClass('striped');
//         //selektiramo s pomoći JQuerya unutar table elementa sve tr elemente
//         //i na njih mičemo klasu sa removeClass koja se zove striped
//         $('table tr:nth-child(even)').addClass('striped');
//         //selektiramo sve neparne djeca elemente i dodajemo im ovu klasu striped
//     };
    

//     async function getpokemons(){
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon-color/yellow');
//         const data = await response.json();
//         return data.pokemon_species.slice(0,20);
//     }

//     function fillList(pokemons){
//         const context = {
//             pokemon: pokemons,
//             tableClass: 'table'
//         };
//         const html = template(context);
//         destination.innerHTML = html;
//         $('[data-toggle="popover"]').popover();

//         addStripes();
//     }
//     getpokemons().then(pkmns => fillList(pkmns));
// });