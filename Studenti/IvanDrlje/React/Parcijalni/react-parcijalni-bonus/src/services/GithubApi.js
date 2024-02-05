

//funkcija koja razrješuje response od API-a
function resolveResponse(response){
    if(response.status === 200){
        //ovdi provjeravamo jel naš odogovor pozitivan 200 je pozitivno
        //sa status svojstvom na odgovoru koji smo dobili.
        return response.json();
    }

    if(response.status === 404){
        //nema korisnika kojeg mi tražimo znači 404
        throw new Error('No such user!');
        //S OVIM ZAPRAMO HVATAMO VLASTITU GREŠKU SA NAREDBOM THROW I RADIMO
        //NOVI ERROR OBJEKT SA VLASTITOM PORUKOM - ALI OVO BI TRIBALO JOŠ 
        //RAZRADIT REALNO to bi doli vatali sa catch iza fetch i then!!!
    }

    throw new Error('Oooops, server error');
    //OVO RADIMO GREŠKU KADA NIJE ODGOVOR NI 404 NI 200, ZA TU OPCIJU
}


//funkcija za slanje i prihvat prvog zahtjeva na APi
function fetchUser(userName){
    const url = `https://api.github.com/users/${userName}`;
    //Ovo smo interpolirali zadnji dio upita koji šaljemo na github API
    return fetch(url).then(response => resolveResponse(response))
    //PUTEM FETCHA POŠALJEMO ZAHTJEV NA API, KADA DOĐE ODOGOVR U OBLIKU 
    //PROMISA U THENU GA STAVLJAMO KAO RESPONSE I RASTAVLJAMO POZIVAJUĆI
    //FUNKCIJU RESOLVERESPONSE(DI JE .JSON). Tako se onda taj cili odgovor 
    //razriješen vrati gori putem returna
}



//funkcija za slanje i prihvat drugog zahtjeva na APi
function fetchUserRepos(userName){
    const url = `https://api.github.com/users/${userName}/repos`;
    return fetch(url).then(response => resolveResponse(response))
    //OVO JE DRUGI POZIV DI ZA NAŠEG USERA OČEKUJEMO LISTU NJEGOVIH REPOZITORIJA
}



//export objekt
const exportDefault = {
    fetchUser,
    fetchUserRepos
}

export default exportDefault;
//OVO JE JOŠ JEDNA NAČIN EXPORTA DI FUNKCIJE SREMIMO U UBJEKT PA IH ONDA
// KAO OBJEKT EXPORTIRAMO
