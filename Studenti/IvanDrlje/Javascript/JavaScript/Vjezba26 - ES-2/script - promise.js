'use strict';

//1. Zadatak -  Napišite Promise koji čeka funkciju getX, i na resolved reagira sa 
//console.log-om vrijednosti vraćene vrijednosti, a na reject reagira sa 
//console.log-om stringa "Oh no!"


const getX = () => Math.random() >= 0.5;


const prom =  new Promise((resolve, reject) => { 

    const x = getX();

    if(x){
        return setTimeout(() => resolve(x), 1000); //ako želimo vratiti neku vrijednost npr x kao ovdi moramo pisat u ovoj arrow notaciji!!!
    }
    return setTimeout(reject, 1000);
});


prom
.then(value => console.log(`Yay! ${value}`)) // vraćena vrijednost(value) x je true u konzoli!!!
.catch(() => console.log('Oh no!'))

