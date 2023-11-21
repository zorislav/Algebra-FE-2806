
function nekaFunkcija (){
    return 'Ivan';
}


export var module1 = {
    x: 1,
    y: function(){
        console.log('Hello');
    },
    z: nekaFunkcija   // ovo smo stavili kao vrijednost vanjsku funkciju - nekaFunkcija
}

//DODAJEMO

//SAMO DODAMO EXPORT KLJUČNU RIJEČ ZA IZVOZ VARIJABLE/OBJEKTA

console.log(module1.x);


export var niz = [1,2,3,4];
//možemo sve živo exportirat u drugi file na ovaj način


//-------------------------------------------------------------------------
//DRUGI NAČIN EXPORTA

var tekst = 'Ovo je primjer za default export';

export default tekst;

//ON MOŽE BITI SAMO JEDAN NA OVAJ NAČIN, A MOŽE BITI I KOMBINACIJA OBA NAČINA
