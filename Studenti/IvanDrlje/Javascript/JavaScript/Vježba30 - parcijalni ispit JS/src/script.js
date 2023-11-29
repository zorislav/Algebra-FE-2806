'use strict';


import { fetchData } from "./data.js";
//import funkcije iz filea data.js
import { createElement } from "./render.js";
//import funkcije iz filea render.js
//OBAVEZNO DODATI NASTAVKE JS NA KRAJU IMPORTA JER NAČE NE RADE!!!



//dohvat elemenata koji nam trebaju
const inputElement = document.getElementById('searchTerm');
const ulElement = document.getElementById('songsList');
const noSongsMsg = document.getElementById('noSongs');
const loadSpin = document.getElementById('loadingSpinner');


let timeout = null;
//stvaramo globalnu varijablu koju ćemo koristiti za timeout, da tražilica
//reagira tek nakon cijelog upisanog pojma




//cijeli kod dole smo stavili u export default funkciju, acijelu ju importiramo u
//indey.js!!!
export default()=> {
    //------------------------------------------------------------------------
    //definicija funkcija eventlistenera
    const updateMusicList = (event) => {

        clearTimeout(timeout);
        //SVAKA SLJEDEĆA TIPKA BRIŠE PRVI TIMEOUT, A PONOVO POKREĆE NOVI TIMEOUT!!!

        //ovdi spremamo timeout u globalnu varijablu(iako ovaj timeout nije neophodan)!!!
        timeout = setTimeout(async () => {

            while (ulElement.firstChild) {
            ulElement.removeChild(ulElement.firstChild);
            }
            //OVDI ODMA NA POČETKU BRIŠEMO SVE UL ELEMENTE DOK IMA DIJETE, BRIŠEMO IH
            //TAKO ČISTIMO LISTU BEZ RELOADANJA, I KAD BRIŠEMO SLOVO PO SLOVO
            //BRIŠE POJEDINAČNO!!!


            const inputElementValue = inputElement.value.trim();
            //čitamo zapravo upis u input element

            if(inputElementValue){ //ako je nešto upisano bit će true!!!
                noSongsMsg.style.display ='none';
                //brišemo element sa porukom da nema upisa u formular, jer ga ima

                loadSpin.style.display = 'block';
                //palimo loading spiner, da radi prilikom dohvata podataka
                
                let retData = [];
                //radimo prazan niz za dohvat podataka iz API-a
                retData = await fetchData(inputElementValue);
                //pokrećemo funkciju za dohvat podataka, a argument je vrijednost našeg
                //upisa u input formular, funkciju radi preglednosti deklariramo vani
                //S OBZIROM DA NAM FUKCIJA DAJE PROMISE MORAMO GA RAZRIJEŠITI, PA SMO
                //STAVILI ASYNC/AWAIT DA PRIČEKAMO RAZRJEŠENJE PROMISA
                console.log(retData);//dobili smo promise u konzoli

                loadSpin.style.display = 'none';
                //gasimo loading spiner, iza dohvata podataka

                //SADA OVDE RADIMO UBACIVANJE ELEMENATA U NAŠU UL LISTU!!!
                if(retData.length !== 0){//provjera jel smo šta primili
                    for (let i in retData){
                        if(retData[i].artist && retData[i].song) {
                            //još jedna provjra ako su podaci došli ali jesu li u 
                            //ispravnom formatu???!!!
                            const listItemElement = createElement(retData[i]);
                            //gore na vrhu smo napravili funkciju createElement
                            ulElement.appendChild(listItemElement);
                        }
                    }

                }else{
                    noSongsMsg.style.display = 'block';
                    //unutarni if/else za ponovo pristupanje tražilici, bez reloada
                    //znači opet ovde ako nema podataka pišemo našu poruku
                }

            }else{//ovo je ako nije ništa upisano
                noSongsMsg.style.display = 'block';
                //prikazujemo element sa porukom da nema upisa u formular
            }


            //console.log(inputElement.value);
            //konzola ispisuje svako slovo utipkano u obrazac, jer smo potakli event!!!
            console.log(event.target.value);//alternativa za ovo gore!!!


        }, 800);
        //POSTAVLJAMO OVAJ TIMEOUT DA DAMO VREMENSKI ODMAK KORISNIKU DA UPIŠE
        //REALNO VIŠE SLOVA-RIJEČI, A NE DA SE SITUACIJA AŽURIRA ZA SVAKO UPISANO
        //SLOVO
        //KAKO SMO GORE NAPISALI, ZA SVAKO SLOVBO SE PRVO TIMEOUT PONIŠTAVA A 
        //ONDA SE DODAJE NOVI TIMEOUT, KOJI OPET BROJI 800MS DO IZVRŠENJA FUNKCIJE
        //ILI PRITISKOM NA SLJEDEĆU TIPKU POMNIŠTAVAMO BROJENJE I POČINJEMO IZ
        //POČETKA!!! KAD DOĐEMO DO KRAJA TIPKANJA, OTPUŠTANJA TIPKE, I TIMEOUT
        //ODBROJI 800MS, TEK TADA SE IZVRŠAVA ZAHTJEV ZA PRIHVAT PODATAKA SA 
        //API-A!!!

    }





    //-------------------------------------------------------------------------
    //definicija event listenera
    inputElement.addEventListener('keyup', updateMusicList);
    //OVAJ EVENT SE POKREĆE KADA MI PRITISNEMO I OTPUSTIMO TIPKU NA TIPKOVNICI!!!

}

