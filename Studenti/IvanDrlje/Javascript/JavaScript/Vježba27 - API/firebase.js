'use strict';

const inputEl = document.getElementById('input');
const ulEl = document.getElementById('lista');
const posaljiButtonEl = document.getElementById('posalji');
const procitajButtonEl = document.getElementById('procitaj');
const spinner = document.getElementById('loading-spinner');



//DOHVAT, ČITANJE PODATAKA
async function getData (){

    try{ //ovo radimo za testiranje, da možemo izbacit grešku dolje sa catch

        spinner.style.display = 'block';
        //s ovim palimo loading spinner, minjamo mu display!!!! prije samog učitavanja!!!!


        const response = await fetch('https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/demodb.json', {method: 'GET'});
        //ovaj dio(demodb.json) gore u adresi smo dodali, vidit zašto, valjda mora biti JSON na kraju, a demodb je njegov put do tog direktorija!!'
        // ovaj smo primjer koristili na vježbi https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/demodb.json!!!!
        //DRUGI PARAMETAR .FETCH METODE JE METODA ZA KOMUNIKACIJU, DEFOULT JE GET,
        // I DA JE NISMO NAPISALI BILO BI ISTO, ZA DRUGE STAVLJAMO RAZLIČITO!!!
        //OVAJ DRUGI PARAMETAR SE PIŠE U OBLIKU OBJEKTA, zapravo je objekt!!!!
        const responseData = await response.json();

        spinner.style.display = 'none';
        //gasimo spinner na display none, kad nam je loading odrađen!!!

        console.log(responseData);


        //ZANIMLJIVO, petlja će se vrtiti dok ne izbriše sve postojeće elemente
        while (ulEl.firstChild){
            //stavili smo uvjet dok god ulEl ima firstChild, zapravo dok postoji
            // znači dok daje true, onda brišemo taj first child
            ulEl.removeChild(ulEl.firstChild);
            //zapravo time čistimo naše podatke i stranica nam izgleda kao da je
            //refrešana, a ne da se dodaju novi elementi što je bio slučaj prije!!!
        }

        //Znači ova while petlja nam osigurava da prije punjenja sadržaja dolje, 
        //očistimo prethodni sadržaj.

        for (let key in responseData){
            let liEl = document.createElement('li');
            //kreirali smo novi element
            ulEl.appendChild(liEl);
            //stavljamo element u DOM kao dijete ulEl
            liEl.innerText = responseData[key].poruka;
            //s ovim postavljamo tekst novih elemenata naše liste, tako što pristupom
            //na objekt koji smo dobili (responseData) na poziciji (key) a .poruka je 
            //pristup svojstvu dobivenog objekta, te ćemo dobiti value tih svojstava
            //ispisano u našoj listi!!! TOP!!!
        }



    } catch(error){  //ovdje vatamo grešku, i ako je ispisujemo neki error!!!
        alert(error);
    }

}


//-------------------------------------------------------------------------
//SLANJE PODATAKA


async function postData(){

  

    const tekst = inputEl.value.trim(); 
    //uzimamo vrijednost našeg input elementa(obrasca) zapravo njegov value,
    //, sa trim() maknemo prazna mjesta ispred i pozadi(trim možda i manje bitan al eto)

    const postObj = {
        poruka: tekst
    };
    //s obzirom da je naš back-end koncipiran da ima na nekom objektu 
    //svojstva PORUKA, kao što smo vidjeli kod prihvata podataka, moramo
    // za slanje prilagoditi naš input, tako da ga spremimo kao vrijednost svojstva
    //poruka u novom objektu kojeg moramo napraviti, I TEK TADA GA MOŽEMO SLATI!!!



    try{


        spinner.style.display = 'block';
        //s ovim palimo loading spinner, minjamo mu display!!!! prije samog uploadanja!!!!
    

        const salji = await fetch('https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/demodb.json',
        {method: 'POST',
         body: JSON.stringify(postObj),
         headers: {
            'Content-Type': 'application/json'
        }}); 
        //šaljemo podatke tako da koristimo metodu POST, ali kao drugi element
        // objekta moramo staviti SAM SADRŽAJ ŠTO ŠALJEMO backendu, (ovdi je to 
        //body) kao vrijednost stavljamo naš novonapravljni objekt ali ga moramo
        // slati kao JSON objekt te ga moramo pretvotiti sa metodom JSON.stingyfy u
        // JSON file i onda idemo, dodati 3. element(svojstvo) ovdi je to 
        //HEADERS, koji NAM DAJE DODATNE INFORMACIJE O SAMOM ZAHTJEVU. Taj
        // headers je isto objekt!!! S njim opisujemo sadržaj koji šaljem 
        //back-endu 'Content-Type', a taj 'Content-Type' koji nama treba 
        //ovde je 'application/json'!!!

        
        const saljiPodatke =  await salji.json();
        console.log(saljiPodatke);
        //ovim kodom provjeravamo poslane podatke

        
        spinner.style.display = 'none';
        //gasimo spinner na display none, kad nam je Uploading odrađen!!!


        alert('Podaci su uspješno poslani');
        //dajemo input korisniku da su podaci uspješno poslani, ako je sve ok

        inputEl.value = '';
        // nakon svega s ovim resetiramo naš imput element kako bi bio 
        //spreman za slanje novih podataka, postavljamo ga na prazan string!!!


    } catch(error){
        alert(error);
    }

        
}



posaljiButtonEl.addEventListener('click', postData);
//Želimo da nam se kad kliknemo na botun izvrši funkcija postData, da pošaljemo podatke

procitajButtonEl.addEventListener('click', getData);
//Želimo da nam se kad kliknemo na botun izvrši funkcija getData, da dobijemo podatke

//SVE RADI !!!, PROBATI JOŠ OVAKVIH PRIMJERA DOMA!!!
//Kad pošaljemo podatke, dobijemo autogeneriranu poruku u konzoli, nekog objekta
// sa svojstvom name: i value nekod šifra koda

