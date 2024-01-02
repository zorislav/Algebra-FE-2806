//---------------------------------------------------------------------
//definicija funkcije za kreiranje novog elementa u našoj UL
export const createElement = (songData) => {

    const listItem =  document.createElement('li');
    //kreiramo novi li element u DOMU
     const listItemP = document.createElement('p');
     //kreiramo novi p element u DOMU
 
     listItemP.innerHTML = `${songData.artist} - ${songData.song}`;
     //upisujemo tekst u naš novi paragraf
     listItem.appendChild(listItemP);
     //paragraf dodajemo u novi li element!!!
 
     return listItem;
 }