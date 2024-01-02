//---------------------------------------------------------------------------
//definicija funkcije za dohvat podataka od API-a, a vraća ih u fukciji niže
export const fetchData = async (inputElValue) => {//parametar je upis u naš input element

    const url = `https://itunes.apple.com/search?term=${inputElValue}&media=music`;
    //ovi je url bolji, nego onaj iz zadatka, vidit malo, i ovi malo zapinje
   // const url = `https://itunes.apple.com/search?term=${inputElValue}&entity=song`;
    //STAVLJAMO NAŠ INPUT IZ TRAŽILICE IZA RIJEČI SEARCH?TERM=(UMJESTO INDIE??)
    //Provjeriti ovo još jednom bolje, zašto meni nije radilo!!!
    
    try{//sa try/catch tražimo potencijalnu grešku
        const response = await fetch(url);
        //GORE SMO AWAIT STAVILI PRIJE PARAMETRA, DA MOŽEMO OVDE ASYNC
        //S ovim kodom pristupamo našim URL-om do API-a
        const data = await response.json();
        //response.json funkcija opet vraća promise i stavljamo joj await
    
        console.log(data);
        //dobijamo nazad objekte sa rezultatima, gdje možemo vidjeti kako 
        //pristupiti dalje, zapravo naći kriterij!!
    
        const returnData = data.results.map(result => {
            return {
                artist: result.artistName,
                song: result.trackName
            }
        })
        //OVO MI NIJE BAŠ JASNO, PROUČIT!!!!!!!!!
    
        return returnData;

    }catch(error){

        console.log(error);
        return [];
        //vraćamo prazni niz

    }


}

