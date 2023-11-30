'use strict';



//DOHVATITI ELEMENTE
//---------------------------------------------------------------------

const input = document.querySelector('input');
//s ovim selektiramo samo prvi imput element
const addButton = document.querySelector('#input-add');
const allButton = document.querySelector('#button-all');
const activeButton = document.querySelector('#button-active');
const completedButton = document.querySelector('#button-completed');
const clearAllCompletedButton = document.querySelector('#button-clear-completed');
const list = document.querySelector('ul');







//NEKI KOD
//--------------------------------------------------------------------

function addListItem (){
    const text = input.value;
    //hvatamo vrijednost upisa u tekstualni obrazac

    if(text.trim().length !== 0){
        const newItem = createListItem(text);
        //argumment pozivanja f. text je zapravo logično upis od korisnika!!!
        list.appendChild(newItem);
        input.value = '';
        //ovde je ideja da kreiramo list item element(funkcija niže), onda ga
        //u drugom redu dodamo u našu listu, a u trećem poništavamo unos value
        //obrasca opet na prazan string, čistimo ga nakom unosa, za sljedeći unos
        //DA OVO NE BI BILO OVDJE ISKOMPLICIRAMO MI ĆEMO KREIRANJE LIST ITEMA
        //OBAVITI U ZASEBNOJ FUNKCIJI - createListItem niže!!!

    } else {
        alert('Please enter todo!')
        //ovo je za scenarij da smo kliknuli add botun, al ništa nismo 
        //odabrali!!!, ovo odma možemo testirati u aplikaciji i radi!!!
        //zapravo ovdi je text.trim().length === 0 !!!
    }
};


function createListItem (text){
    //parametar text je upis od korisnika
    const listItem = document.createElement('li');
    // ova nam je varijabla sad kreator novog list elementa

    const div = document.createElement('div');
    //kreiramo novi div element
    const intDiv = document.createElement('div');
    //kreiramo novi div element ali ovaj će nam biti unutar drugoga, posli 
    //u DOM-u u browseru možemo provjerit kako su posloženi, ovo je sve za 
    //potrebe stilizacije!!!!
    div.classList.add('li-container');
    //Za prvi div radimo NOVU KLASU ELEMENTA(li-container)!!!!
    intDiv.classList.add('li-container-int');
    //za drugi div isto ide nova klasa



    intDiv.innerText = text;
    //za kreirani drugi div element stavljamo input korisnika kao sadržaj i
    // onda ga prosljeđujemo gore u funkciju preko return vrijednosti, ali kao
    //listItem jer je on parent element

    addCheckBox(intDiv);//S OVIM POZIVAMO VANJSKU FUNKCIJU I PREDAJEMO JOJ
    //TRAŽENI ARGUMENT intDiv!!!

    div.appendChild(intDiv);
    //dodajemo unutarnji div u vanjski div

    addRemoveButton(div);
    //CIJELOM VANJSKOM DIVU PREKO OVE VANJSKE FUNKCIJE SE DODAVA OVAJ REMOVE
    //BOTUN(X)!!!OVDI JE POZIVAMO!!!

    listItem.appendChild(div);
    //sada dodajemo vanjski div unutar listItema(novokreiranog li elementa),
    //ovo sve pregledat i devtollsima, da je dobro!!!!

    //OVO DIVOVANJE JE SAMO RADI DODATNE CSS STILIZACIJE!!!!

    return listItem;
}



function addCheckBox (item){
    const checkBox = document.createElement('input');
    //opet moramo kreirati novi elelment jer nam triba checkbox za naš App!!!
    
    checkBox.setAttribute('type','checkbox');
    //na taj element dodajemo ATRIBUT type sa funkcijom setAttribute, a kao 
    //drugi parametar funkcije je vrijednost tog novog atributa - CHECKBOX!!!!!

    checkBox.addEventListener('click', checkListItem);
    //imamo novi event listener di čekamo pritisak na checkbox da bi nešto napravili
    //FUNKCIJU PIŠEMO VANI!!!

    item.insertBefore(checkBox, item.firstChild);
    //argument funkcije (item) bi trebao biti onaj goreintDiv, da ide 
    //checkbox prije njega. Na taj parametar/argument item stavljamo funkciju
    //insertBefore gdje su nam prvi parametar naš checkBox a drugi parametar,
    // umećemo ga PRIJE POZICIJE item.firstChild(to je onaj naš intDiv), znači
    //insertBefore funkcija na omogućava da ubacimo jedan argument ispred drugoga
}


function addRemoveButton (item){
    const removeButton = document.createElement('div');
    //kreiramo novi div element! 
    removeButton.innerText = 'x';
    //postavljamo tekst na x, zapravo onaj iksić za skidanje koji nam treba!!!
    removeButton.className = 'removeButton';
    //I OVAKO SE MOŽE POSTAVITI NOVA KLASA!!!!!

    removeButton.addEventListener('click', removeListItem)
    //osluškujemo funkciju koja će se izvršiti klikom na naš x!!!


    item.appendChild(removeButton);
    //funkciju pozivamo gore u createListItem a item(ovaj naš) je onaj 
    //vanjski div, i to je argument ove funkcije!!!

}



//poziva se u addCheckbox
function checkListItem (event){
    //U SVAKOM EVENT LISTENERU DOBIJAMO EVENT OBJEKT I SA NJIM 
    //MOŽEMO RADITI DALJE
    const checkBox = event.target;
    //s ovim ciljamo na element koji je uzrokovao event, zapravo sa ovim 
    //svojstvom .target!!! BITNO!!! 

    if(checkBox.checked){
        //provjeravamo da li je svojstvo na elementu checkBox checked, znači da li 
        //je čekirano, onda je true!!!
        checkBox.parentNode.style.textDecoration = 'line-through';
        //S OVIM PRISTUPAMO ELEMENTU RODITELJU checkBoxa, te mu minjamo preko
        //CSS styla textDecoration u da bude precrtan text!!, ako je čekiran!!
        // to je onaj naš unutarnji div jer je unutar njega zapravo TEXT!!!
    }else{
        checkBox.parentNode.style.textDecoration = '';
        //ako nije checkiran skidamo textDecoration, zapravo vraćamo ga na
        //NORMALNO
    }
}



//poziva se u addRemove Button
function removeListItem (event) {
    const removeButton = event.target;
    removeButton.parentNode.parentNode.remove();
    //IDEMO DVA RODITELJA GORE, I BRIŠEMO ELEMENT SA METODOM REMOVE, KOJA 
    //BRIŠE ELEMENT IZ DOM-A. ZNAČI KLIKOM NA NAŠ X BRIŠEMO   CILI LI 
    //ELEMENT, SUPER!!!
}



function showAll (){
    const listItems = list.getElementsByTagName('li');
    for(let i = 0; i < listItems.length; i++){
        listItems[i].style.display = '';
        //ovdi biramo sve elemente pa nas nije ni briga što triba prikazat
        //pa prikazujemo sve, brišemo prethodne displaye, zapravo premostimo
        //sve staro i stavljamo sve na viđeno!!!
    }    
    allButton.disabled = true;
    activeButton.disabled = false;
    completedButton.disabled = false;
    //ovo je sve objašnjeno u show active funkciji, sada samo minjamo
    //raspored da je uključen samo allButtons!!!

};



function showActive (){
    //moramo napraviti opciju da možemo izdvojiti čekirane elemente
    const listItems = list.getElementsByTagName('li');
    //dohvaćamo sve list elemente koji su u našoj UL, ne moramo svaki put
    //ići na dokument... kad može i ovako, jer je sve objekt u DOM-u
    //NAPOMENA DA JE OVO NIZ ELEMENATA JER IH IMA VIŠE
    for(let i = 0; i < listItems.length; i++){
       const check =  listItems[i].getElementsByTagName('input'); 
        //ciljamo sve li elemente na poziciji i koji imaju kao dijete
        //input element, tagName poziv po imenu elementa!!!
        if(check[0].checked){
            //gore stavljamo 0 jer nama treba samo prvi element niza, a ovaj
            //getElementsByTagName vraća niz, zato mi gledamo samo 1 poziciju
            //niza, mislim da je radi toga ova 0 gori!!!
            //OVA FUNKCIJA UVIK VRAĆA NIZ ZATO MORAMO GLEDAT INDEX NIZA, OVDI
            //GLEDAMO 0!!!
            listItems[i].style.display = 'none';
            //znači ako je checkbox checked nećemo ga prikazati!!!!!
        }else{
            listItems[i].style.display = '';
            //ako nije brišemo to pravilo
        }

    }
    allButton.disabled = false;
    activeButton.disabled = true;
    completedButton.disabled = false;
    //pristupamo ovim botunima i stavljamo mu disabled sviojstvo na true, tako
    //više nije dostupan u tom slučaju, ili false da je dostupan u tom 
    //slučaju, tako biramo funkcionalnost TOP!!!
    //zapravo biramo da tamo di jesmo taj je botun logično blokiran a druga 
    //dva rade!!!

};


//detaljno objašnjenje svega u showactive
function showCompleted (){
     
     const listItems = list.getElementsByTagName('li');
     
     for(let i = 0; i < listItems.length; i++){
        const check =  listItems[i].getElementsByTagName('input'); 
         if(!check[0].checked){
            //za razliku od showactive, gore samo obrćemo koji nisu čekirani!!!
            listItems[i].style.display = 'none';
         }else{
            listItems[i].style.display = '';
         }
     }
     allButton.disabled = false;
     activeButton.disabled = false;
     completedButton.disabled = true;
};



function removeAllCompleted (){

    const listItems = list.getElementsByTagName('li');
     
    for(let i = listItems.length - 1; i >= 0; i--){
        //obrćemo redoslijed petlje, umjesto onih gore, idemo od kraja,
        //jer kad obrišemo jedan element, petlja ga preskače jer se length nije
        //tada smanjio. Ovdi počinjemo sa zadnjim elementom, tj. lenghth - 1, jer je
        //JE LENGTH NPR. 5 A MI POČINJEMO OD INDEKSA 4!!!!!!, ZATO - 1  TOP!!!
        //DOBAR PRIMJER, LIPO!!!!
        const check =  listItems[i].getElementsByTagName('input'); 
        if(check[0].checked){
            listItems[i].remove();
            //AKO SU ČEKIRANI BRIŠEMO IH IZ LISTE, KAO GOTOVI SU!!!
        }

    }
}




//POSTAVITI EVENT LISTENERE
//------------------------------------------------------------------------

addButton.addEventListener('click', addListItem);
allButton.addEventListener('click', showAll);
activeButton.addEventListener('click', showActive)
completedButton.addEventListener('click', showCompleted)
clearAllCompletedButton.addEventListener('click', removeAllCompleted);

//pokrečemo eventlistener, a funkcija nam je napravljena prije




//-----------------------------------------------------------------------------
//------------------------------------------------------------------------
//OPCIJA 2 ZA ISTU STVAR POD KOMENTAROM, OVA OPCIJA NAM SLUŽI SAMO KAO OPCIJA
// DA SVE STAVIMO U U LOKALNI NAMESPACE, TE PO ZAHTJEVU ZADATKA, OVO JE KAO 
//OPCIJA , ALI MALO ME BRINU OVI KONSTRUKTORI ITD PROVJERITI JOŠ



/*
//Zadatak - aplikacija mora	sadržati bar jedan glavni objekt tip podatka 
//koji sadržava glavne metode TODO aplikacije, evo ga niže
//-	Bar jedna metoda objekta je definirana u prototipu objekta


(function (){
    //ovo smo stavili sve u anonomnu funkciju da ne zagađujemo globalni namespace
    
    
    
        function Todo (){
            //DOHVATITI ELEMENTE
            //---------------------------------------------------------------------
    
            const input = document.querySelector('input');
            //s ovim selektiramo samo prvi imput element
            const addButton = document.querySelector('#input-add');
            const allButton = document.querySelector('#button-all');
            const activeButton = document.querySelector('#button-active');
            const completedButton = document.querySelector('#button-completed');
            const clearAllCompletedButton = document.querySelector('#button-clear-completed');
            const list = document.querySelector('ul');
    
    
    
    
    
    
    
            //NEKI KOD
            //--------------------------------------------------------------------
    
            function addListItem (){
                const text = input.value;
                //hvatamo vrijednost upisa u tekstualni obrazac
    
                if(text.trim().length !== 0){
                    const newItem = createListItem(text);
                    //argumment pozivanja f. text je zapravo logično upis od korisnika!!!
                    list.appendChild(newItem);
                    input.value = '';
                    //ovde je ideja da kreiramo list item element(funkcija niže), onda ga
                    //u drugom redu dodamo u našu listu, a u trećem poništavamo unos value
                    //obrasca opet na prazan string, čistimo ga nakom unosa, za sljedeći unos
                    //DA OVO NE BI BILO OVDJE ISKOMPLICIRAMO MI ĆEMO KREIRANJE LIST ITEMA
                    //OBAVITI U ZASEBNOJ FUNKCIJI - createListItem niže!!!
    
                } else {
                    alert('Please enter todo!')
                    //ovo je za scenarij da smo kliknuli add botun, al ništa nismo 
                    //odabrali!!!, ovo odma možemo testirati u aplikaciji i radi!!!
                    //zapravo ovdi je text.trim().length === 0 !!!
                }
            };
    
    
            function createListItem (text){
                //parametar text je upis od korisnika
                const listItem = document.createElement('li');
                // ova nam je varijabla sad kreator novog list elementa
    
                const div = document.createElement('div');
                //kreiramo novi div element
                const intDiv = document.createElement('div');
                //kreiramo novi div element ali ovaj će nam biti unutar drugoga, posli 
                //u DOM-u u browseru možemo provjerit kako su posloženi, ovo je sve za 
                //potrebe stilizacije!!!!
                div.classList.add('li-container');
                //Za prvi div radimo NOVU KLASU ELEMENTA(li-container)!!!!
                intDiv.classList.add('li-container-int');
                //za drugi div isto ide nova klasa
    
    
    
                intDiv.innerText = text;
                //za kreirani drugi div element stavljamo input korisnika kao sadržaj i
                // onda ga prosljeđujemo gore u funkciju preko return vrijednosti, ali kao
                //listItem jer je on parent element
    
                addCheckBox(intDiv);//S OVIM POZIVAMO VANJSKU FUNKCIJU I PREDAJEMO JOJ
                //TRAŽENI ARGUMENT intDiv!!!
    
                div.appendChild(intDiv);
                //dodajemo unutarnji div u vanjski div
    
                addRemoveButton(div);
                //CIJELOM VANJSKOM DIVU PREKO OVE VANJSKE FUNKCIJE SE DODAVA OVAJ REMOVE
                //BOTUN(X)!!!OVDI JE POZIVAMO!!!
    
                listItem.appendChild(div);
                //sada dodajemo vanjski div unutar listItema(novokreiranog li elementa),
                //ovo sve pregledat i devtollsima, da je dobro!!!!
    
                //OVO DIVOVANJE JE SAMO RADI DODATNE CSS STILIZACIJE!!!!
    
                return listItem;
            }
    
    
    
            function addCheckBox (item){
                const checkBox = document.createElement('input');
                //opet moramo kreirati novi elelment jer nam triba checkbox za naš App!!!
                
                checkBox.setAttribute('type','checkbox');
                //na taj element dodajemo ATRIBUT type sa funkcijom setAttribute, a kao 
                //drugi parametar funkcije je vrijednost tog novog atributa - CHECKBOX!!!!!
    
                checkBox.addEventListener('click', checkListItem);
                //imamo novi event listener di čekamo pritisak na checkbox da bi nešto napravili
                //FUNKCIJU PIŠEMO VANI!!!
    
                item.insertBefore(checkBox, item.firstChild);
                //argument funkcije (item) bi trebao biti onaj goreintDiv, da ide 
                //checkbox prije njega. Na taj parametar/argument item stavljamo funkciju
                //insertBefore gdje su nam prvi parametar naš checkBox a drugi parametar,
                // umećemo ga PRIJE POZICIJE item.firstChild(to je onaj naš intDiv), znači
                //insertBefore funkcija na omogućava da ubacimo jedan argument ispred drugoga
            }
    
    
            function addRemoveButton (item){
                const removeButton = document.createElement('div');
                //kreiramo novi div element! 
                removeButton.innerText = 'x';
                //postavljamo tekst na x, zapravo onaj iksić za skidanje koji nam treba!!!
                removeButton.className = 'removeButton';
                //I OVAKO SE MOŽE POSTAVITI NOVA KLASA!!!!!
    
                removeButton.addEventListener('click', removeListItem)
                //osluškujemo funkciju koja će se izvršiti klikom na naš x!!!
    
    
                item.appendChild(removeButton);
                //funkciju pozivamo gore u createListItem a item(ovaj naš) je onaj 
                //vanjski div, i to je argument ove funkcije!!!
    
            }
    
    
    
            //poziva se u addCheckbox
            function checkListItem (event){
                //U SVAKOM EVENT LISTENERU DOBIJAMO EVENT OBJEKT I SA NJIM 
                //MOŽEMO RADITI DALJE
                const checkBox = event.target;
                //s ovim ciljamo na element koji je uzrokovao event, zapravo sa ovim 
                //svojstvom .target!!! BITNO!!! 
    
                if(checkBox.checked){
                    //provjeravamo da li je svojstvo na elementu checkBox checked, znači da li 
                    //je čekirano, onda je true!!!
                    checkBox.parentNode.style.textDecoration = 'line-through';
                    //S OVIM PRISTUPAMO ELEMENTU RODITELJU checkBoxa, te mu minjamo preko
                    //CSS styla textDecoration u da bude precrtan text!!, ako je čekiran!!
                    // to je onaj naš unutarnji div jer je unutar njega zapravo TEXT!!!
                }else{
                    checkBox.parentNode.style.textDecoration = '';
                    //ako nije checkiran skidamo textDecoration, zapravo vraćamo ga na
                    //NORMALNO
                }
            }
    
    
    
            //poziva se u addRemove Button
            function removeListItem (event) {
                const removeButton = event.target;
                removeButton.parentNode.parentNode.remove();
                //IDEMO DVA RODITELJA GORE, I BRIŠEMO ELEMENT SA METODOM REMOVE, KOJA 
                //BRIŠE ELEMENT IZ DOM-A. ZNAČI KLIKOM NA NAŠ X BRIŠEMO   CILI LI 
                //ELEMENT, SUPER!!!
            }
    
    
    
            function showAll (){
                const listItems = list.getElementsByTagName('li');
                for(let i = 0; i < listItems.length; i++){
                    listItems[i].style.display = '';
                    //ovdi biramo sve elemente pa nas nije ni briga što triba prikazat
                    //pa prikazujemo sve, brišemo prethodne displaye, zapravo premostimo
                    //sve staro i stavljamo sve na viđeno!!!
                }    
                allButton.disabled = true;
                activeButton.disabled = false;
                completedButton.disabled = false;
                //ovo je sve objašnjeno u show active funkciji, sada samo minjamo
                //raspored da je uključen samo allButtons!!!
    
            };
    
    
    
            function showActive (){
                //moramo napraviti opciju da možemo izdvojiti čekirane elemente
                const listItems = list.getElementsByTagName('li');
                //dohvaćamo sve list elemente koji su u našoj UL, ne moramo svaki put
                //ići na dokument... kad može i ovako, jer je sve objekt u DOM-u
                //NAPOMENA DA JE OVO NIZ ELEMENATA JER IH IMA VIŠE
                for(let i = 0; i < listItems.length; i++){
                const check =  listItems[i].getElementsByTagName('input'); 
                    //ciljamo sve li elemente na poziciji i koji imaju kao dijete
                    //input element, tagName poziv po imenu elementa!!!
                    if(check[0].checked){
                        //gore stavljamo 0 jer nama treba samo prvi element niza, a ovaj
                        //getElementsByTagName vraća niz, zato mi gledamo samo 1 poziciju
                        //niza, mislim da je radi toga ova 0 gori!!!
                        //OVA FUNKCIJA UVIK VRAĆA NIZ ZATO MORAMO GLEDAT INDEX NIZA, OVDI
                        //GLEDAMO 0!!!
                        listItems[i].style.display = 'none';
                        //znači ako je checkbox checked nećemo ga prikazati!!!!!
                    }else{
                        listItems[i].style.display = '';
                        //ako nije brišemo to pravilo
                    }
    
                }
                allButton.disabled = false;
                activeButton.disabled = true;
                completedButton.disabled = false;
                //pristupamo ovim botunima i stavljamo mu disabled sviojstvo na true, tako
                //više nije dostupan u tom slučaju, ili false da je dostupan u tom 
                //slučaju, tako biramo funkcionalnost TOP!!!
                //zapravo biramo da tamo di jesmo taj je botun logično blokiran a druga 
                //dva rade!!!
    
            };
    
    
            //detaljno objašnjenje svega u showactive
            function showCompleted (){
                
                const listItems = list.getElementsByTagName('li');
                
                for(let i = 0; i < listItems.length; i++){
                    const check =  listItems[i].getElementsByTagName('input'); 
                    if(!check[0].checked){
                        //za razliku od showactive, gore samo obrćemo koji nisu čekirani!!!
                        listItems[i].style.display = 'none';
                    }else{
                        listItems[i].style.display = '';
                    }
                }
                allButton.disabled = false;
                activeButton.disabled = false;
                completedButton.disabled = true;
            };
    
    
    
            function removeAllCompleted (){
    
                const listItems = list.getElementsByTagName('li');
                
                for(let i = listItems.length - 1; i >= 0; i--){
                    //obrćemo redoslijed petlje, umjesto onih gore, idemo od kraja,
                    //jer kad obrišemo jedan element, petlja ga preskače jer se length nije
                    //tada smanjio. Ovdi počinjemo sa zadnjim elementom, tj. lenghth - 1, jer je
                    //JE LENGTH NPR. 5 A MI POČINJEMO OD INDEKSA 4!!!!!!, ZATO - 1  TOP!!!
                    //DOBAR PRIMJER, LIPO!!!!
                    const check =  listItems[i].getElementsByTagName('input'); 
                    if(check[0].checked){
                        listItems[i].remove();
                        //AKO SU ČEKIRANI BRIŠEMO IH IZ LISTE, KAO GOTOVI SU!!!
                    }
    
                }
            }
    
                //ovo je funkcija za poziv event listenera
                this.addListeners = function (){
                //POSTAVITI EVENT LISTENERE
                    //------------------------------------------------------------------------
                    addButton.addEventListener('click', addListItem);
                    allButton.addEventListener('click', showAll);
                    activeButton.addEventListener('click', showActive)
                    completedButton.addEventListener('click', showCompleted)
                    clearAllCompletedButton.addEventListener('click', removeAllCompleted);
                }
    
        
    
    
            //pokrečemo eventlistener, a funkcija nam je napravljena prije
        };
        //ime konstruktor funkcija se stavljaju sa prvim velikim slovom!!!
    
    
        Todo.prototype.init = function(){
            this.addListeners();
            //ovdi pozivamo funkciju za poziv svih event listenera
        }
        //s ovim stavljamo novu metodu(init) u našu konstruktor funkciju koju poslije
        // mogu koristiti svi objekti iz nje proizašli
    
        const todo = new Todo();
        //kreiramo novi objekt preko konstruktor funkcije
    
    
        window.addEventListener('load', todo.init());
        //stavljamo event listener na window objekt, da na pokrene funkCiju prilikom
        //loadanja stranice(prvi parametar je 'load') 
        //Ovo radimo zato što u zadatku piše - Aplikacija se loada tek nakon 
        //loadanja cijelog window-a
    })();
    */